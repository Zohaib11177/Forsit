import { Col, Menu, Row } from "antd";
import { NavLink } from "react-router-dom";
import job from "../assets/images/jobsIcon.svg"
import product from "../assets/images/productsIcon.svg"
import service from "../assets/images/servicesIcon.svg"
import placeicon from "../assets/images/PlacesIcon.svg"
import home from "../assets/images/feedsIcon.svg";
import restaurant from "../assets/images/Restaurant-icon.png"
import schools from "../assets/images/School-icon.png"
import mosques from "../assets/images/Mosque-icon.png";
import { useSelector } from "react-redux";
import event from "../assets/images/eventsIcon.svg"
// 1111
// import job from "../assets/images/jobsIcon.svg"
// import product from "../assets/images/productsIcon.svg"
// import service from "../assets/images/servicesIcon.svg"
// import placeicon from "../assets/images/PlacesIcon.svg"
// import home from "../assets/images/feedsIcon.svg";
// import restaurant from "../assets/images/Restaurant-icon.png"
// import schools from "../assets/images/School-icon.png"
// import mosques from "../assets/images/Mosque-icon.png";
// 1111

function UserSider({ login, setCategory, fav }) {
  const isAuthenticated = useSelector((state) => state.userReducer?.userData?.IsAuthenticated)

  const Isactive = (item) => {
    let ok = window.location.pathname.includes(item) ? true : false;
    return ok
  }

  return (
    <>
      <Row className="sider  bg-base sticky-0"  >
        <Col md={24} className="pt-2 sticky-0 bg-base" >

          <div className="overflowy h-100">
            {window?.location?.pathname?.includes("my-listing") ?
              <Menu className="user-side border-0 bg-base pt-1"
                defaultSelectedKeys={[window.location.pathname?.toString()]}
              >

                {isAuthenticated == true ?

                  <Menu.Item key="/my-listing/home">
                    <div className="my-0">
                      <NavLink to='/home ' className={Isactive("/home") ? 'menu-item-span py-1' : 'menu-item-span py-1'}>
                        <img src={home} className="mx-2" />
                        <span
                        >
                          Feeds
                        </span>
                      </NavLink></div>
                  </Menu.Item >
                  :
                  <Menu.Item key="/my-listing/home "
                  >
                    <div className="my-0">
                      <NavLink to='/home ' className={Isactive("/home") ? 'menu-item-span py-1' : 'menu-item-span py-1'}>
                        <img src={home} className="mx-2" />
                        <span
                        >
                          Home
                        </span>
                      </NavLink></div></Menu.Item >
                }
                <p className="sider-heading ps-4 my-3" >{
                  fav == true ? "MY FAVOURITES" :
                    "MY LISTINGS"}</p>

                <Menu.Item key="/my-listing/places"
                >
                  <div className="my-0">
                    <NavLink to="places" className={Isactive("/places") ? 'menu-item-span py-1' : 'menu-item-span py-1'}>

                      <img src={placeicon} className="mx-2" />
                      <span
                      //   style={{
                      //     marginLeft: '10px',
                      //     marginTop: '2px',
                      //     fontWeight: '300',
                      //   }}
                      >
                        Places
                      </span>
                    </NavLink></div>
                </Menu.Item >
                <Menu.Item key="/my-listing/event"
                >
                  <div className="my-0">
                    <NavLink to="events" className={Isactive("/events") ? 'menu-item-span py-1' : 'menu-item-span py-1'}>

                      <img src={event} className="mx-2" />
                      <span
                      //   style={{
                      //     marginLeft: '10px',
                      //     marginTop: '2px',
                      //     fontWeight: '300',
                      //   }}
                      >
                        Events
                      </span>
                    </NavLink></div>
                </Menu.Item >
                <Menu.Item key="/my-listing/job"
                >
                  <div className="my-0">
                    <NavLink to="jobs" className={Isactive("/jobs") ? 'menu-item-span py-1' : 'menu-item-span py-1'}>

                      <img src={job} className="mx-2" />
                      <span
                      //   style={{
                      //     marginLeft: '10px',
                      //     marginTop: '2px',
                      //     fontWeight: '300',
                      //   }}
                      >
                        Jobs
                      </span>
                    </NavLink></div></Menu.Item >
                <Menu.Item key="/my-listing/product"
                >
                  <div className="my-0">
                    <NavLink to="products" className={Isactive("/product") ? 'menu-item-span py-1' : 'menu-item-span py-1'}>

                      <img src={product} className="mx-2" />
                      <span
                      //   style={{
                      //     marginLeft: '10px',
                      //     marginTop: '2px',
                      //     fontWeight: '300',
                      //   }}
                      >
                        Products
                      </span>
                    </NavLink></div></Menu.Item >
                <Menu.Item key="/my-listing/service"
                >
                  <div className="my-0">
                    <NavLink to="services" className={Isactive("/services") ? 'menu-item-span py-1' : 'menu-item-span py-1'}>

                      <img src={service} className="mx-2" />
                      <span
                      //   style={{
                      //     marginLeft: '10px',
                      //     marginTop: '2px',
                      //     fontWeight: '300',
                      //   }}
                      >
                        Services
                      </span>
                    </NavLink></div></Menu.Item>
              </Menu> :
              <Menu className="user-side bg-base border-0 pt-1"
                defaultSelectedKeys={[window.location.pathname?.toString()]}
              >

                {login == true ?

                  <Menu.Item key="/my-favourites/home"
                  >
                    <div className="my-0">
                      <NavLink to='/home ' className={Isactive("/home") ? 'menu-item-span py-1' : 'menu-item-span py-1'}>
                        <img src={home} className="mx-2" />
                        <span
                        >
                          Feeds
                        </span>
                      </NavLink></div>
                  </Menu.Item >
                  :
                  <Menu.Item key="/my-favourites/home"
                  >
                    <div className="my-0">
                      <NavLink to='/home ' className={Isactive("/home") ? 'menu-item-span py-1' : 'menu-item-span py-1'}>
                        <img src={home} className="mx-2" />
                        <span
                        >
                          Home
                        </span>
                      </NavLink></div></Menu.Item >
                }
                <p className="sider-heading ps-4 my-3" >{
                  fav == true ? "MY FAVOURITES" :
                    "MY LISTINGS"}</p>

                <Menu.Item key="/my-favourites/places"
                >
                  <div className="my-0">
                    <NavLink to="places" className={Isactive("/places") ? 'menu-item-span py-1' : 'menu-item-span py-1'}>

                      <img src={placeicon} className="mx-2" />
                      <span
                      //   style={{
                      //     marginLeft: '10px',
                      //     marginTop: '2px',
                      //     fontWeight: '300',
                      //   }}
                      >
                        Places
                      </span>
                    </NavLink></div>
                </Menu.Item >
                <Menu.Item key="/my-favourites/events"
                >
                  <div className="my-0">
                    <NavLink to="events" className={Isactive("/events") ? 'menu-item-span py-1' : 'menu-item-span py-1'}>

                      <img src={event} className="mx-2" />
                      <span
                      //   style={{
                      //     marginLeft: '10px',
                      //     marginTop: '2px',
                      //     fontWeight: '300',
                      //   }}
                      >
                        Events
                      </span>
                    </NavLink></div>
                </Menu.Item >
                <Menu.Item key="/my-favourites/jobs"
                >
                  <div className="my-0">
                    <NavLink to="jobs" className={Isactive("/jobs") ? 'menu-item-span py-1' : 'menu-item-span py-1'}>

                      <img src={job} className="mx-2" />
                      <span
                      //   style={{
                      //     marginLeft: '10px',
                      //     marginTop: '2px',
                      //     fontWeight: '300',
                      //   }}
                      >
                        Jobs
                      </span>
                    </NavLink></div></Menu.Item >
                <Menu.Item key="/my-favourites/product"
                >
                  <div className="my-0">
                    <NavLink to="products" className={Isactive("/product") ? 'menu-item-span py-1' : 'menu-item-span py-1'}>

                      <img src={product} className="mx-2" />
                      <span
                      //   style={{
                      //     marginLeft: '10px',
                      //     marginTop: '2px',
                      //     fontWeight: '300',
                      //   }}
                      >
                        Products
                      </span>
                    </NavLink></div></Menu.Item >
                <Menu.Item key="/my-favourites/services"
                >
                  <div className="my-0">
                    <NavLink to="services" className={Isactive("/services") ? 'menu-item-span py-1' : 'menu-item-span py-1'}>

                      <img src={service} className="mx-2" />
                      <span
                      //   style={{
                      //     marginLeft: '10px',
                      //     marginTop: '2px',
                      //     fontWeight: '300',
                      //   }}
                      >
                        Services
                      </span>
                    </NavLink></div></Menu.Item>
              </Menu>}
          </div>
        </Col>

      </Row>

    </>

  );
}

export default UserSider;
