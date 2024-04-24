import React from 'react';

function HomePage({email, name}) {
  // const handleLogOut = () => {
  //   localStorage.clear(); 
  //   window.location.reload();
  // };

  return (
    <div>
      <h1>HomePage</h1>
      {/* <p><b>User Name:</b> {name}<br/></p>
      <p><b>Email:</b> {email}</p>
      <button onClick={handleLogOut}>Log Out</button>  */}
    </div>
  );
}

export default HomePage;
