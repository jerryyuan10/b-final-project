import React from "react";
import { Helmet } from "react-helmet";
import AccountInfo from "../components/account-info";

function AccountPage(props) {
  // props = {user: null, useCache: true, provider:"Google"}
  return (
    <main>
      <Helmet>
        <title>Account</title>
      </Helmet>
      <AccountInfo {...props} />
    </main>
  );
}

export default AccountPage;