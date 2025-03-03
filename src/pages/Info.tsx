import { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../Navbar";
import AOS from "aos";

function Info() {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <div className="overflow-hidden">
      <Navbar />

      <div className="p-[5%]">
        <div data-aos="fade-down" className="tabs tabs-lift mt-30">
          <input
            type="radio"
            name="tabInfo"
            className="tab bg-white border-base-300"
            aria-label="Spring"
            defaultChecked
          />
          <div className="tab-content bg-white border-base-300 p-[5%]">
            <h3 className="h3-font mb-5">
              How to deal with different <br />
              weather conditions?
            </h3>
            <p>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Nec morbi
              auctor eros ipsum litora. Integer laoreet dictum justo commodo ac
              magnis id ut. Hac morbi est bibendum magna fames placerat pretium
              viverra. Ornare nibh himenaeos quisque posuere ridiculus venenatis
              interdum. Etiam sociosqu hendrerit curae netus convallis amet
              turpis semper. Duis arcu hendrerit dis; malesuada libero cras.
              Dolor tortor tristique penatibus dignissim vehicula porttitor
              ullamcorper suspendisse. Cras lorem sed dolor ultricies sed est.
              Cubilia suspendisse pulvinar a aliquam consectetur curabitur.
              Potenti suspendisse aptent aptent ante taciti risus justo hac
              ipsum. Purus facilisis facilisi mollis facilisis sem vehicula;
              felis faucibus. Nam consectetur maximus mollis pellentesque rutrum
              at. Dui tincidunt commodo a pharetra rhoncus. Lorem leo taciti
              euismod eleifend ac primis lobortis tincidunt. Commodo ut
              ridiculus tortor ultricies mollis nostra sociosqu. Lacus accumsan
              velit tempus sagittis vel erat consequat. Bibendum ligula commodo
              mi hac venenatis id. Magna potenti efficitur vitae purus morbi.
              Fringilla parturient nunc proin; faucibus vivamus molestie
              senectus? Odio nibh vulputate odio vitae purus maecenas feugiat
              donec arcu. Mi habitasse amet dictum aliquam commodo ad erat
              himenaeos. Ut parturient vulputate tempor ligula maecenas cras.
            </p>
            <h3 className="h3-font mt-20">Health Recommendations</h3>
            <p>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Nec morbi
              auctor eros ipsum litora. Integer laoreet dictum justo commodo ac
              magnis id ut. Hac morbi est bibendum magna fames placerat pretium
              viverra. Ornare nibh himenaeos quisque posuere ridiculus venenatis
              interdum. Etiam sociosqu hendrerit curae netus convallis amet
              turpis semper. Duis arcu hendrerit dis; malesuada libero cras.
              Dolor tortor tristique penatibus dignissim vehicula porttitor
              ullamcorper suspendisse. Cras lorem sed dolor ultricies sed est.
              Cubilia suspendisse pulvinar a aliquam consectetur curabitur.
              Potenti suspendisse aptent aptent ante taciti risus justo hac
              ipsum. Purus facilisis facilisi mollis facilisis sem vehicula;
              felis faucibus. Nam consectetur maximus mollis pellentesque rutrum
              at. Dui tincidunt commodo a pharetra rhoncus. Lorem leo taciti
              euismod eleifend ac primis lobortis tincidunt. Commodo ut
              ridiculus tortor ultricies mollis nostra sociosqu. Lacus accumsan
              velit tempus sagittis vel erat consequat. Bibendum ligula commodo
              mi hac venenatis id. Magna potenti efficitur vitae purus morbi.
              Fringilla parturient nunc proin; faucibus vivamus molestie
              senectus? Odio nibh vulputate odio vitae purus maecenas feugiat
              donec arcu. Mi habitasse amet dictum aliquam commodo ad erat
              himenaeos. Ut parturient vulputate tempor ligula maecenas
              cras.Lorem ipsum odor amet, consectetuer adipiscing elit. Nec
              morbi auctor eros ipsum litora. Integer laoreet dictum justo
              commodo ac magnis id ut. Hac morbi est bibendum magna fames
              placerat pretium viverra. Ornare nibh himenaeos quisque posuere
              ridiculus venenatis interdum. Etiam sociosqu hendrerit curae netus
              convallis amet turpis semper. Duis arcu hendrerit dis; malesuada
              libero cras. Dolor tortor tristique penatibus dignissim vehicula
              porttitor ullamcorper suspendisse. Cras lorem sed dolor ultricies
              sed est. Cubilia suspendisse pulvinar a aliquam consectetur
              curabitur. Potenti suspendisse aptent aptent ante taciti risus
              justo hac ipsum. Purus facilisis facilisi mollis facilisis sem
              vehicula; felis faucibus. Nam consectetur maximus mollis
              pellentesque rutrum at.
            </p>
          </div>
          <input
            type="radio"
            name="tabInfo"
            className="tab bg-white border-base-300"
            aria-label="Summer"
          />
          <div className="tab-content bg-white border-base-300 p-[5%]">
            <h3 className="h3-font mb-5">
              How to deal with different <br />
              weather conditions?
            </h3>
            <p>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Nec morbi
              auctor eros ipsum litora. Integer laoreet dictum justo commodo ac
              magnis id ut. Hac morbi est bibendum magna fames placerat pretium
              viverra. Ornare nibh himenaeos quisque posuere ridiculus venenatis
              interdum. Etiam sociosqu hendrerit curae netus convallis amet
              turpis semper. Duis arcu hendrerit dis; malesuada libero cras.
              Dolor tortor tristique penatibus dignissim vehicula porttitor
              ullamcorper suspendisse. Cras lorem sed dolor ultricies sed est.
              Cubilia suspendisse pulvinar a aliquam consectetur curabitur.
              Potenti suspendisse aptent aptent ante taciti risus justo hac
              ipsum. Purus facilisis facilisi mollis facilisis sem vehicula;
              felis faucibus. Nam consectetur maximus mollis pellentesque rutrum
              at. Dui tincidunt commodo a pharetra rhoncus. Lorem leo taciti
              euismod eleifend ac primis lobortis tincidunt. Commodo ut
              ridiculus tortor ultricies mollis nostra sociosqu. Lacus accumsan
              velit tempus sagittis vel erat consequat. Bibendum ligula commodo
              mi hac venenatis id. Magna potenti efficitur vitae purus morbi.
              Fringilla parturient nunc proin; faucibus vivamus molestie
              senectus? Odio nibh vulputate odio vitae purus maecenas feugiat
              donec arcu. Mi habitasse amet dictum aliquam commodo ad erat
              himenaeos. Ut parturient vulputate tempor ligula maecenas cras.
            </p>
            <h3 className="h3-font mt-20">Health Recommendations</h3>
            <p>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Nec morbi
              auctor eros ipsum litora. Integer laoreet dictum justo commodo ac
              magnis id ut. Hac morbi est bibendum magna fames placerat pretium
              viverra. Ornare nibh himenaeos quisque posuere ridiculus venenatis
              interdum. Etiam sociosqu hendrerit curae netus convallis amet
              turpis semper. Duis arcu hendrerit dis; malesuada libero cras.
              Dolor tortor tristique penatibus dignissim vehicula porttitor
              ullamcorper suspendisse. Cras lorem sed dolor ultricies sed est.
              Cubilia suspendisse pulvinar a aliquam consectetur curabitur.
              Potenti suspendisse aptent aptent ante taciti risus justo hac
              ipsum. Purus facilisis facilisi mollis facilisis sem vehicula;
              felis faucibus. Nam consectetur maximus mollis pellentesque rutrum
              at. Dui tincidunt commodo a pharetra rhoncus. Lorem leo taciti
              euismod eleifend ac primis lobortis tincidunt. Commodo ut
              ridiculus tortor ultricies mollis nostra sociosqu. Lacus accumsan
              velit tempus sagittis vel erat consequat. Bibendum ligula commodo
              mi hac venenatis id. Magna potenti efficitur vitae purus morbi.
              Fringilla parturient nunc proin; faucibus vivamus molestie
              senectus? Odio nibh vulputate odio vitae purus maecenas feugiat
              donec arcu. Mi habitasse amet dictum aliquam commodo ad erat
              himenaeos. Ut parturient vulputate tempor ligula maecenas
              cras.Lorem ipsum odor amet, consectetuer adipiscing elit. Nec
              morbi auctor eros ipsum litora. Integer laoreet dictum justo
              commodo ac magnis id ut. Hac morbi est bibendum magna fames
              placerat pretium viverra. Ornare nibh himenaeos quisque posuere
              ridiculus venenatis interdum. Etiam sociosqu hendrerit curae netus
              convallis amet turpis semper. Duis arcu hendrerit dis; malesuada
              libero cras. Dolor tortor tristique penatibus dignissim vehicula
              porttitor ullamcorper suspendisse. Cras lorem sed dolor ultricies
              sed est. Cubilia suspendisse pulvinar a aliquam consectetur
              curabitur. Potenti suspendisse aptent aptent ante taciti risus
              justo hac ipsum. Purus facilisis facilisi mollis facilisis sem
              vehicula; felis faucibus. Nam consectetur maximus mollis
              pellentesque rutrum at.
            </p>
          </div>
          <input
            type="radio"
            name="tabInfo"
            className="tab bg-white border-base-300"
            aria-label="Autumn"
          />
          <div className="tab-content bg-white border-base-300 p-[5%]">
            <h3 className="h3-font mb-5">
              How to deal with different <br />
              weather conditions?
            </h3>
            <p>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Nec morbi
              auctor eros ipsum litora. Integer laoreet dictum justo commodo ac
              magnis id ut. Hac morbi est bibendum magna fames placerat pretium
              viverra. Ornare nibh himenaeos quisque posuere ridiculus venenatis
              interdum. Etiam sociosqu hendrerit curae netus convallis amet
              turpis semper. Duis arcu hendrerit dis; malesuada libero cras.
              Dolor tortor tristique penatibus dignissim vehicula porttitor
              ullamcorper suspendisse. Cras lorem sed dolor ultricies sed est.
              Cubilia suspendisse pulvinar a aliquam consectetur curabitur.
              Potenti suspendisse aptent aptent ante taciti risus justo hac
              ipsum. Purus facilisis facilisi mollis facilisis sem vehicula;
              felis faucibus. Nam consectetur maximus mollis pellentesque rutrum
              at. Dui tincidunt commodo a pharetra rhoncus. Lorem leo taciti
              euismod eleifend ac primis lobortis tincidunt. Commodo ut
              ridiculus tortor ultricies mollis nostra sociosqu. Lacus accumsan
              velit tempus sagittis vel erat consequat. Bibendum ligula commodo
              mi hac venenatis id. Magna potenti efficitur vitae purus morbi.
              Fringilla parturient nunc proin; faucibus vivamus molestie
              senectus? Odio nibh vulputate odio vitae purus maecenas feugiat
              donec arcu. Mi habitasse amet dictum aliquam commodo ad erat
              himenaeos. Ut parturient vulputate tempor ligula maecenas cras.
            </p>
            <h3 className="h3-font mt-20">Health Recommendations</h3>
            <p>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Nec morbi
              auctor eros ipsum litora. Integer laoreet dictum justo commodo ac
              magnis id ut. Hac morbi est bibendum magna fames placerat pretium
              viverra. Ornare nibh himenaeos quisque posuere ridiculus venenatis
              interdum. Etiam sociosqu hendrerit curae netus convallis amet
              turpis semper. Duis arcu hendrerit dis; malesuada libero cras.
              Dolor tortor tristique penatibus dignissim vehicula porttitor
              ullamcorper suspendisse. Cras lorem sed dolor ultricies sed est.
              Cubilia suspendisse pulvinar a aliquam consectetur curabitur.
              Potenti suspendisse aptent aptent ante taciti risus justo hac
              ipsum. Purus facilisis facilisi mollis facilisis sem vehicula;
              felis faucibus. Nam consectetur maximus mollis pellentesque rutrum
              at. Dui tincidunt commodo a pharetra rhoncus. Lorem leo taciti
              euismod eleifend ac primis lobortis tincidunt. Commodo ut
              ridiculus tortor ultricies mollis nostra sociosqu. Lacus accumsan
              velit tempus sagittis vel erat consequat. Bibendum ligula commodo
              mi hac venenatis id. Magna potenti efficitur vitae purus morbi.
              Fringilla parturient nunc proin; faucibus vivamus molestie
              senectus? Odio nibh vulputate odio vitae purus maecenas feugiat
              donec arcu. Mi habitasse amet dictum aliquam commodo ad erat
              himenaeos. Ut parturient vulputate tempor ligula maecenas
              cras.Lorem ipsum odor amet, consectetuer adipiscing elit. Nec
              morbi auctor eros ipsum litora. Integer laoreet dictum justo
              commodo ac magnis id ut. Hac morbi est bibendum magna fames
              placerat pretium viverra. Ornare nibh himenaeos quisque posuere
              ridiculus venenatis interdum. Etiam sociosqu hendrerit curae netus
              convallis amet turpis semper. Duis arcu hendrerit dis; malesuada
              libero cras. Dolor tortor tristique penatibus dignissim vehicula
              porttitor ullamcorper suspendisse. Cras lorem sed dolor ultricies
              sed est. Cubilia suspendisse pulvinar a aliquam consectetur
              curabitur. Potenti suspendisse aptent aptent ante taciti risus
              justo hac ipsum. Purus facilisis facilisi mollis facilisis sem
              vehicula; felis faucibus. Nam consectetur maximus mollis
              pellentesque rutrum at.
            </p>
          </div>
          <input
            type="radio"
            name="tabInfo"
            className="tab bg-white border-base-300"
            aria-label="Winter"
          />
          <div className="tab-content bg-white border-base-300 p-[5%]">
            <h3 className="h3-font mb-5">
              How to deal with different <br />
              weather conditions?
            </h3>
            <p>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Nec morbi
              auctor eros ipsum litora. Integer laoreet dictum justo commodo ac
              magnis id ut. Hac morbi est bibendum magna fames placerat pretium
              viverra. Ornare nibh himenaeos quisque posuere ridiculus venenatis
              interdum. Etiam sociosqu hendrerit curae netus convallis amet
              turpis semper. Duis arcu hendrerit dis; malesuada libero cras.
              Dolor tortor tristique penatibus dignissim vehicula porttitor
              ullamcorper suspendisse. Cras lorem sed dolor ultricies sed est.
              Cubilia suspendisse pulvinar a aliquam consectetur curabitur.
              Potenti suspendisse aptent aptent ante taciti risus justo hac
              ipsum. Purus facilisis facilisi mollis facilisis sem vehicula;
              felis faucibus. Nam consectetur maximus mollis pellentesque rutrum
              at. Dui tincidunt commodo a pharetra rhoncus. Lorem leo taciti
              euismod eleifend ac primis lobortis tincidunt. Commodo ut
              ridiculus tortor ultricies mollis nostra sociosqu. Lacus accumsan
              velit tempus sagittis vel erat consequat. Bibendum ligula commodo
              mi hac venenatis id. Magna potenti efficitur vitae purus morbi.
              Fringilla parturient nunc proin; faucibus vivamus molestie
              senectus? Odio nibh vulputate odio vitae purus maecenas feugiat
              donec arcu. Mi habitasse amet dictum aliquam commodo ad erat
              himenaeos. Ut parturient vulputate tempor ligula maecenas cras.
            </p>
            <h3 className="h3-font mt-20">Health Recommendations</h3>
            <p>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Nec morbi
              auctor eros ipsum litora. Integer laoreet dictum justo commodo ac
              magnis id ut. Hac morbi est bibendum magna fames placerat pretium
              viverra. Ornare nibh himenaeos quisque posuere ridiculus venenatis
              interdum. Etiam sociosqu hendrerit curae netus convallis amet
              turpis semper. Duis arcu hendrerit dis; malesuada libero cras.
              Dolor tortor tristique penatibus dignissim vehicula porttitor
              ullamcorper suspendisse. Cras lorem sed dolor ultricies sed est.
              Cubilia suspendisse pulvinar a aliquam consectetur curabitur.
              Potenti suspendisse aptent aptent ante taciti risus justo hac
              ipsum. Purus facilisis facilisi mollis facilisis sem vehicula;
              felis faucibus. Nam consectetur maximus mollis pellentesque rutrum
              at. Dui tincidunt commodo a pharetra rhoncus. Lorem leo taciti
              euismod eleifend ac primis lobortis tincidunt. Commodo ut
              ridiculus tortor ultricies mollis nostra sociosqu. Lacus accumsan
              velit tempus sagittis vel erat consequat. Bibendum ligula commodo
              mi hac venenatis id. Magna potenti efficitur vitae purus morbi.
              Fringilla parturient nunc proin; faucibus vivamus molestie
              senectus? Odio nibh vulputate odio vitae purus maecenas feugiat
              donec arcu. Mi habitasse amet dictum aliquam commodo ad erat
              himenaeos. Ut parturient vulputate tempor ligula maecenas
              cras.Lorem ipsum odor amet, consectetuer adipiscing elit. Nec
              morbi auctor eros ipsum litora. Integer laoreet dictum justo
              commodo ac magnis id ut. Hac morbi est bibendum magna fames
              placerat pretium viverra. Ornare nibh himenaeos quisque posuere
              ridiculus venenatis interdum. Etiam sociosqu hendrerit curae netus
              convallis amet turpis semper. Duis arcu hendrerit dis; malesuada
              libero cras. Dolor tortor tristique penatibus dignissim vehicula
              porttitor ullamcorper suspendisse. Cras lorem sed dolor ultricies
              sed est. Cubilia suspendisse pulvinar a aliquam consectetur
              curabitur. Potenti suspendisse aptent aptent ante taciti risus
              justo hac ipsum. Purus facilisis facilisi mollis facilisis sem
              vehicula; felis faucibus. Nam consectetur maximus mollis
              pellentesque rutrum at.
            </p>
          </div>
        </div>
      </div>
      <Footer bgColor="bg-secondary" />
    </div>
  );
}

export default Info;
