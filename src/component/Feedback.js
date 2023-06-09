import React from 'react'

export const Feedback = () => {
  return (
    <section>
        <div class="container">
        <div class="row d-flex justify-content-center mt-5">
            <div class="col-md-10 col-xl-8 text-center">
            <h3 class="mb-4">Testimonials</h3>
            <p class="mb-4 pb-2 mb-md-5 pb-md-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet
                numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum
                quisquam eum porro a pariatur veniam.
            </p>
            </div>
        </div>

        <div class="row text-center d-flex align-items-stretch">
            <div class="col-md-4 mb-5 mb-md-0 d-flex align-items-stretch">
            <div class="card testimonial-card">
                <div class="card-up" ></div>
                <div class="avatar mx-auto bg-white">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                    class="rounded-circle img-fluid" />
                </div>
                <div class="card-body">
                <h4 class="mb-4">Maria Smantha</h4>
                <hr />
                <p class="dark-grey-text mt-4">
                    <i class="fas fa-quote-left pe-2"></i>Lorem ipsum dolor sit amet eos adipisci,
                    consectetur adipisicing elit.
                </p>
                </div>
            </div>
            </div>
            <div class="col-md-4 mb-5 mb-md-0 d-flex align-items-stretch">
            <div class="card testimonial-card">
                <div class="card-up" ></div>
                <div class="avatar mx-auto bg-white">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                    class="rounded-circle img-fluid" />
                </div>
                <div class="card-body">
                <h4 class="mb-4">Lisa Cudrow</h4>
                <hr />
                <p class="dark-grey-text mt-4">
                    <i class="fas fa-quote-left pe-2"></i>Neque cupiditate assumenda in maiores
                    repudi mollitia architecto.
                </p>
                </div>
            </div>
            </div>
            <div class="col-md-4 mb-0 d-flex align-items-stretch">
            <div class="card testimonial-card">
                <div class="card-up" ></div>
                <div class="avatar mx-auto bg-white">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
                    class="rounded-circle img-fluid" />
                </div>
                <div class="card-body">
                <h4 class="mb-4">John Smith</h4>
                <hr />
                <p class="dark-grey-text mt-4">
                    <i class="fas fa-quote-left pe-2"></i>Delectus impedit saepe officiis ab
                    aliquam repellat rem unde ducimus.
                </p>
                </div>
            </div>
            </div>
        </div>
        </div>
    </section>
  )
}
