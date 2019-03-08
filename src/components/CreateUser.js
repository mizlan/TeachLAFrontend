import React from "react";
import Footer from "./common/Footer.js";
import CreateUserModal from "./CreateUser/CreateUserModal.js";

/**--------Props--------
 * None
 */

class CreateUser extends React.Component {
  /**
   * constructor - sets initial state and props
   * @param {Object} props - properties passed down by the super component
   */
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      errorMessage: "",
      waiting: false,
      usernameMessage: null,
      passwordMessage: null,
    };
  }

  renderModal = () => {
    return (
      <div className="login-page-content">
        <div style={{ height: "0px" }}>&nbsp;</div>
        {/*for some reason when you don't have a non empty element above the modal,
        it leaves a white section above it...so thats why this is here*/}
        <div className="login-modal">
          <CreateUserModal />
        </div>
      </div>
    );
  };

  renderFooter = () => {
    return <Footer />;
  };

  render() {
    //if we haven't checked if the user is logged in yet, show a loading screen
    return (
      <div className="login-page">
        <div className="login-page-content">
          <div style={{ height: "0px" }}>&nbsp;</div>
          {/*for some reason when you don't have a non empty element above the modal,
          it leaves a white section above it...so thats why this is here*/}
          {this.renderModal()}
        </div>
        {this.renderFooter()}
      </div>
    );
  }
}

export default CreateUser;