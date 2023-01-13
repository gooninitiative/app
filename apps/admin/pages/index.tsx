import Link from "next/link";
import { Button } from "ui";

import LayoutAuthenticated from "../layouts/authenticated";

const Admin = () => {
  return (
    <LayoutAuthenticated>
      <h1>Dashboard</h1>
      <Button />
    </LayoutAuthenticated>
  );
}

export default Admin;
