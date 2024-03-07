import { useState } from 'react';

const Form = () => {
  const [showTicketAndDownload, setShowTicketAndDownload] = useState(false);

  const onButtonClick = () => {
    const pdfUrl = "ticket.pdf"; // Replace with your PDF file's URL
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "AIEventPdf.pdf"; // Custom filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;

    // const isEmailRegistered = await checkEmailRegistration(email);

    // if (isEmailRegistered) {
    //   alert('This email is already registered. Please use a different email.');
    //   return;
    // }

    const user = { name, email, phone };
    console.log(user);

    fetch('https://localhost:5000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedID) {
          alert('User added successfully');
          setShowTicketAndDownload(true); // Show the ticket picture and download button after successful form submission
          form.reset();
        }
      })
  }

  return (
    <div>
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
          <div className={!showTicketAndDownload ? "text-center lg:text-left" : "hidden"}>
            <h1 className="text-3xl font-bold mt-10">Please fill up the form to get ticket</h1>
          </div>            {showTicketAndDownload && <img className="" src="ticket.jpg" alt="" />}
            {showTicketAndDownload && (
              <div className="form-control mt-4">
                <button onClick={onButtonClick} className="btn text-white bg-black hover:bg-red-600">Download Ticket</button>
              </div>
            )}
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-lg bg-base-100 mt-20">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="name" placeholder="Name" name="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input type="number" placeholder="Phone" name="phone" className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
                <button onClick={setShowTicketAndDownload} className="btn text-white bg-black hover:bg-red-600">Submit</button>
              </div>
            </form>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;