import React from "react";

const ComplexDashboardLayout = ({
  children,
  users,
  revenue,
  notifications,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}) => {
  const isLoggedIn = true;
  return (
    <div>
      {isLoggedIn ? (
        <>
          <div>{children}</div>
          <div style={{ display: "flex", gap: "1rem" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div>{users}</div>
              <div>{revenue}</div>
            </div>
            <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
          </div>
        </>
      ) : (
        login
      )}
    </div>
  );
};

export default ComplexDashboardLayout;
