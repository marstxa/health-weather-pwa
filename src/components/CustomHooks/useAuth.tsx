import { auth, db } from "../../config/firebase";
import {
  signOut as firebaseSignOut,
  User,
  onAuthStateChanged,
} from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

interface AuthContextType {
  currentUser: User | null;
  userData: any | null;
  loading: boolean;
  signOut: () => Promise<void>;
  refreshUserData: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

//Auth Provider Component
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [userData, setUserData] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  //Fetch user data
  const fetchUserData = async (user: User) => {
    if (!user) {
      setUserData(null);
      return;
    }

    const data = await getUserData(user.uid);
    setUserData(data);
  };

  //Function to manually refresh user data
  const refreshUserData = async () => {
    if (currentUser) {
      await fetchUserData(currentUser);
    }
  };

  //Sign Out
  const signOut = async () => {
    await firebaseSignOut(auth);
    setUserData(null);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);

      if (user) {
        await fetchUserData(user);
      } else {
        setUserData(null);
      }

      setLoading(false);

      return unsubscribe;
    });
  }, []);

  const value = {
    currentUser,
    userData,
    loading,
    signOut,
    refreshUserData,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { currentUser, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !currentUser) {
      navigate("/signIn");
      toast.error("Create an account to access services");
    }
  }, [currentUser, loading, navigate]);

  return currentUser ? <>{children}</> : null;
};

const getUserData = async (userId: string) => {
  let userData = null;

  try {
    const userRef = doc(db, "#user_id", userId);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      userData = userSnap.data();
    }

    return userData;
  } catch (err) {
    console.error(err);
    toast(`User data failed to fetch, ${err}`, {
      type: "error",
      autoClose: 3000,
    });
    return null;
  }
};
