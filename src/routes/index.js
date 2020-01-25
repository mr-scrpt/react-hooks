import React from "react";
import { Switch, Route } from "react-router-dom";
import Article from "pages/article";
import GlobalFeed from "pages/globalFeed";
import { Autentifications } from "pages/autentifications";


export default () => {
  return (
    <div>
      <Switch>
        <Route path="/" component={GlobalFeed} exact />>
        <Route path="/registration" component={Autentifications} />
        <Route path="/login" component={Autentifications} />
        <Route path="/article/:slug" component={Article} />>
      </Switch>
    </div>
  );
};