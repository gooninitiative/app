import React from "react";
import Head from "next/head";
import { Button } from "ui";

import LayoutAuthenticated from "../layouts/authenticated";
import Card from "../components/card";
import { DiamondHalf } from "react-bootstrap-icons";

const Admin = () => {
  return (
    <LayoutAuthenticated>
      <Head>
        <title>Goon Admin</title>
      </Head>
      <div className="page-header">
        <h1 className="text-3xl font-bold">Dashboard</h1>
      </div>
      <div className="page-content py-6">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-9 grid grid-cols-12 gap-6 auto-rows-min">
            <Card className="col-span-3 h-auto">
              <Card.Body>
                <div className="mb-2 inline-block rounded-md bg-purple-100 p-4 text-purple-900">
                  <DiamondHalf size={20} />
                </div>
                <h5 className="text-gray-600">Unique visits</h5>
                <h6 className="text-xl font-bold">18 000</h6>
              </Card.Body>
            </Card>
            <Card className="col-span-3 h-auto">
              <Card.Body>
                <div className="mb-2 inline-block rounded-md bg-purple-100 p-4 text-purple-900">
                  <DiamondHalf size={20} />
                </div>
                <h5 className="text-gray-600">Unique visits</h5>
                <h6 className="text-xl font-bold">18 000</h6>
              </Card.Body>
            </Card>
            <Card className="col-span-3 h-auto">
              <Card.Body>
                <div className="mb-2 inline-block rounded-md bg-purple-100 p-4 text-purple-900">
                  <DiamondHalf size={20} />
                </div>
                <h5 className="text-gray-600">Unique visits</h5>
                <h6 className="text-xl font-bold">18 000</h6>
              </Card.Body>
            </Card>
            <Card className="col-span-3 h-auto">
              <Card.Body>
                <div className="mb-2 inline-block rounded-md bg-purple-100 p-4 text-purple-900">
                  <DiamondHalf size={20} />
                </div>
                <h5 className="text-gray-600">Unique visits</h5>
                <h6 className="text-xl font-bold">18 000</h6>
              </Card.Body>
            </Card>

            <Card className="col-span-full">
              <Card.Header>
                <h2 className="text-xl font-bold">Profile visits</h2>
              </Card.Header>
              <Card.Body></Card.Body>
            </Card>
          </div>
          <div className="col-span-3">
            <Card>
              <Card.Header>
                <h2 className="text-xl font-bold">Recent messages</h2>
              </Card.Header>
              <Card.Body>
                <div className="flex items-start py-6">
                  <div className="avatar h-12 w-12 flex-shrink-0 flex-grow-0 rounded-full bg-gray-100" />
                  <div className="meta ml-4">
                    <p className="text-xl font-bold leading-tight">
                      <b>Haïssatou Maïmouna</b>
                    </p>
                    <p className="text-gray-600">Student</p>
                  </div>
                </div>
                <div className="flex items-start py-6">
                  <div className="avatar h-12 w-12 flex-shrink-0 flex-grow-0 rounded-full bg-gray-100" />
                  <div className="meta ml-4">
                    <p className="text-xl font-bold leading-tight">
                      <b>Haïssatou Maïmouna</b>
                    </p>
                    <p className="text-gray-600">Student</p>
                  </div>
                </div>
                <div className="flex items-start py-6">
                  <div className="avatar h-12 w-12 flex-shrink-0 flex-grow-0 rounded-full bg-gray-100" />
                  <div className="meta ml-4">
                    <p className="text-xl font-bold leading-tight">
                      <b>Haïssatou Maïmouna</b>
                    </p>
                    <p className="text-gray-600">Student</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </LayoutAuthenticated>
  );
};

export default Admin;
