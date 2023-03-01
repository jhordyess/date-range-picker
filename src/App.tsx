import * as React from "react";
import { last12Months } from "./calcs/ranges";

export default function App() {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl text-center text-teal-500">Hello Iva Burgess</h1>
      <p className="mx-auto">
        Adipisicing ea qui dolor consectetur ipsum et esse officia non
        consectetur occaecat quis est. Deserunt voluptate proident consectetur
        dolore mollit. Ex qui excepteur qui dolore aliqua id dolore quis tempor
        veniam nostrud mollit. Excepteur commodo deserunt non elit.s
      </p>
      <p>
        Laboris commodo pariatur do laboris consequat et. Labore do ullamco
        culpa anim occaecat dolore ullamco fugiat do veniam. Ea aliquip commodo
        elit ipsum commodo consequat veniam aute esse velit dolor irure.
        Adipisicing ullamco irure voluptate esse incididunt eu. Non adipisicing
        magna do consequat minim nisi aliqua culpa irure et. Proident id
        consequat duis aliquip velit magna fugiat in. Et duis sunt mollit amet
        enim deserunt mollit culpa eiusmod sunt nisi fugiat laboris.
      </p>
      <ul>
        <li>{last12Months().ini.toString()}</li>
        <li>{last12Months().end.toString()}</li>
      </ul>
    </div>
  );
}
