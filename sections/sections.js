Vvveb.Sections.add("about-me/about-me", {
    name: "About me",
    image: Vvveb.themeBaseUrl + "/screenshots/about-me/about-me-thumb.jpeg",
    html: `<section class="py-lg-18 py-md-10 py-8" id="aboutme">
	<div class="container">
		<!--row-->
		<div class="row d-flex align-items-center">
			<div class="col-xl-5  col-md-6 col-lg-6 col-12">
				<div class="p-3 mb-5 mb-md-0">
					<!--image-->
					<div class="position-relative">
						<img src="./images/img-2.jpg" alt="about"
							class="img-fluid position-relative z-1 rounded-4 ms-lg-5 ms-3 ms-md-4">
						<div class="position-absolute top-0 mt-1">
							<img src="./images/square.svg" alt="square" class="img-fluid ">
						</div>
					</div>
					<!--image-->
				</div>
			</div>
			<!--col-->
			<div class="col-xl-6 offset-xl-1  col-md-5 offset-md-1 col-lg-5 offset-lg-1 col-12">
				<div class="">
					<!--text-->
					<!--title-->
					<h2 class="mb-5">
						About <span class="text-primary">Me</span>
					</h2>
					<p>There are many variations of passages ofLorem Ipsum
						available, but the majority havesuffered alteration in some
						form, by injected humour,</p>
					<p class="mb-6">Passages ofLorem Ipsumavailable, but the majority havesuffered
						alteration in some form, by injected humour,</p>

					<a href="/page/contact" class="btn btn-primary">Contact Us</a>
					<!--text-->
				</div>
			</div>
		</div>
	</div>
</section>
`
});Vvveb.Sections.add("about-me/contact-me", {
    name: "Contact me",
    image: Vvveb.themeBaseUrl + "/screenshots/about-me/contact-me-thumb.jpeg",
    html: `<section class="py-lg-18 py-md-10 py-8" id="contactme" data-v-component-plugin-contact-form-form data-v-storage="database" data-v-name="contact-us-home">

	<div class="container">
		<!--row-->
		<div class="row">
			<div class="col-xl-8 offset-xl-2 col-md-12 col-lg-8 offset-lg-2 col-12">
				<div class="text-center mb-5 mb-lg-8">
					<!--text-->
					<h2 class="mb-4">Contact <span class="text-primary">Me</span></h2>
					<p class="mb-0">There are many variations of passages ofLorem Ipsumavailable, but the
						majority
						havesuffered alteration in some form, by injected humour,</p>
					<!--text-->
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-xl-4 col-md-6 col-12">
				<div>
					<div class="d-flex mb-3">
						<!--address-->
						<h5 class="">
							<span class="fw-bold text-primary">Address:</span>
						</h5>
						<p class="ms-3 mb-0">23 S 80 Road,
							Benedict,ne, 68316
							United States</p>

					</div>
					<div class="d-flex mb-3">
						<!--phone-->
						<h5 class="">
							<span class="fw-bold text-primary">Phone:</span>
						</h5>
						<p class="mb-0 ms-3">+01 123 456 789</p>

					</div>
					<div class="d-flex mb-3">
						<!--email-->
						<h5 class="">
							<span class="fw-bold text-primary">E mail:</span>
						</h5>
						<p class="mb-0 ms-3">abc.xyz@gmail.com</p>
					</div>
					<div class="d-flex">
						<!--website-->
						<h5>
							<span class="fw-bold text-primary">Website:</span>
						</h5>
						<p class="'mb-0 ms-3">www.abc.xyz.com</p>
					</div>
				</div>
			</div>
			<div class="col-xl-6 offset-xl-2 col-md-6 col-12">
				<div>

					<div class="notifications" data-v-notifications>

	<div class="alert alert-danger d-flex alert-dismissable" role="alert" data-v-notification-error >

		<div class="icon align-middle me-2">
			<i class="align-middle la la-2x lh-1 la-exclamation-triangle"></i>
		</div>

		<div class="flex-grow-1 align-self-center text-small" >
			<div>
				<div data-v-notification-text>
					This is a placeholder for a notification message.
				</div>
			</div>
		</div>


		<button type="button" class="btn-close align-middle" data-bs-dismiss="alert" aria-label="Close">
			<span aria-hidden="true">
				<!-- <i class="la la-times"></i> -->
			</span>
		</button>
	</div>

	<div class="alert alert-success d-flex  alert-dismissable d-flex" role="alert" data-v-notification-success >

		<div class="icon align-middle me-2">
			<i class="align-middle la la-2x lh-1 la-check-circle"></i>
		</div>

		<div class="flex-grow-1 align-self-center align-middle" data-v-notification-text>
			This is a placeholder for a success message.
		</div>

		<button type="button" class="btn-close align-middle" data-bs-dismiss="alert" aria-label="Close">
			<span aria-hidden="true">
				<!-- <i class="la la-times"></i> -->
			</span>
		</button>
	</div>
	
	<div class="alert alert-primary d-flex alert-dismissable d-flex" role="alert" data-v-notification-info >

		<div class="icon align-middle me-2">
			<i class="align-middle la la-2x lh-1  la-info-circle"></i>
		</div>

		<div class="flex-grow-1 align-self-center" data-v-notification-text>
			This is a placeholder for a info message.
		</div>

		<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
			<span aria-hidden="true">
				<!-- <i class="la la-times"></i> -->
			</span>
		</button>
	</div>

</div>
					
					<!--form-->
					<form action="" method="post">
						<input type="hidden" class="form-control" placeholder="First name" name="firstname-empty">	
						<!--row-->
						<div class="row">
							<!--col-->
							<div class="col-lg-6">
								<div class="mb-3">
									<!--label-->
									<label for="first-name-input"
										class="form-label visually-hidden">First Name
										address</label>
									<!--input-->
									<input type="text" name="firstname" class="form-control" id="first-name-input"
										placeholder="First Name" required>
								</div>
							</div>
							<div class="col-lg-6">
								<div class="mb-3">
									<!--label-->
									<label for="last-name-input"
										class="form-label visually-hidden">Last Name
										address</label>
									<!--input-->
									<input type="text" name="lastname" class="form-control" id="last-name-input"
										placeholder="Last Name" required>
								</div>
							</div>
							<div class="col-lg-12">
								<div class="mb-3">
									<!--label-->
									<label for="exampleFormControlInput1"
										class="form-label visually-hidden">Email
										address</label>
									<!--input-->
									<input type="email"  name="email" class="form-control" id="email-input" placeholder="Email" required>
								</div>
							</div>
							<!--col-->
							<div class="col-lg-12">
								<div class="mb-3">
									<!--label-->
									<label for="exampleFormControlTextarea1"
										class="form-label visually-hidden">Example
										textarea</label>
									<!--textarea-->
									<textarea class="form-control" name="message" id="message-input" rows="5" placeholder="Message"></textarea>
								</div>
							</div>
						</div>
						
						
				 <!-- if these hidden inputs are filled then ignore, robots -->

				 <input type="text" class="form-control d-none" placeholder="Contact form" name="contact-form" >	
				 
				 <input type="text" class="form-control d-none" placeholder="Subject" name="subject-empty" >	
				 
				 <input type="text" class="form-control visually-hidden" placeholder="Last name" name="lastname-empty" tabindex="-1">	
				 
						
						<button class="btn btn-primary" type="submit">Contact Us</button>
					</form>
				</div>
			</div>
		</div>
	</div>
</section>
`
});Vvveb.Sections.add("about-me/footer", {
    name: "Footer",
    image: Vvveb.themeBaseUrl + "/screenshots/about-me/footer-thumb.jpeg",
    html: `<footer class="py-5" id="footer" data-v-save-global="index.html,#footer">
	<div class="container">
		<div class="row">
			<div class="col-xl-6 offset-xl-3 col-md-12 col-12">
				<div class="text-center">
					<div class="mb-6">
						<a href="#">
							<img src="./images/footer-logo.svg" alt="footer">
						</a>
					</div>
					<p class="mb-5">There are many variations of passages ofLorem Ipsumavailable, but the majority
						havesuffered
						alteration in some form, </p>
					<a href="#" class="me-3 link-primary"><svg xmlns="http://www.w3.org/2000/svg" width="24"
							height="24" fill=" var(--bs-primary)" class="bi bi-facebook" viewBox="0 0 16 16">
							<path
								d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
						</svg></a>
					<a href="#" class="me-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
							fill=" var(--bs-primary)" class="bi bi-twitter" viewBox="0 0 16 16">
							<path
								d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
						</svg></a>
					<a href="#" class="me-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
							fill=" var(--bs-primary)" class="bi bi-linkedin" viewBox="0 0 16 16">
							<path
								d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
						</svg></a>
					<a href="#" class="me-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
							fill=" var(--bs-primary)" class="bi bi-instagram" viewBox="0 0 16 16">
							<path
								d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
						</svg></a>
					<a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
							fill=" var(--bs-primary)" class="bi bi-youtube" viewBox="0 0 16 16">
							<path
								d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
						</svg></a>
				</div>
			</div>
		</div>
	</div>
</footer>
`
});Vvveb.Sections.add("about-me/hero", {
    name: "Hero",
    image: Vvveb.themeBaseUrl + "/screenshots/about-me/hero-thumb.jpeg",
    html: `<section class="py-lg-18 py-md-10  py-8 bg-dark" id="home">
	<div class="container">
		<!--row-->
		<div class="row d-flex align-items-center">
			<div class="col-xl-5 col-md-6  col-lg-6 col-12">
				<div class="mb-5 mb-md-0">
					<!--text-->
					<span class=" text-primary">Hello, Welcome</span>
					<!--title-->
					<h1 class="mt-4 mb-4 display-3 fw-semibold">I'm Anderson Coper</h1>
					<p class="mb-6 lead">There are many variations of passages ofLorem Ipsum
						available, but the majority havesuffered alteration in some
						form, by injected humour.</p>
					<a href="/page/contact" class="btn btn-primary">Contact Us</a>
					<!--text-->
				</div>
			</div>
			<!--col-->
			<div class="col-xl-5 offset-xl-2 col-md-5 offset-md-1 col-lg-5 offset-lg-1  col-12">
				<!--image-->
				<div class="position-relative">
					<img src="./images/img-1.jpg" alt="about"
						class="img-fluid position-relative z-1 rounded-4 ms-lg-n5 ms-md-n3">
					<div class="position-absolute top-0 mt-1 ">
						<img src="./images/square.svg" alt="square" class="img-fluid w-100 d-none d-lg-block d-md-block">
					</div>
				</div>

			</div>


		</div>
	</div>
</section>
`
});Vvveb.Sections.add("about-me/my-experiences", {
    name: "My experiences",
    image: Vvveb.themeBaseUrl + "/screenshots/about-me/my-experiences-thumb.jpeg",
    html: `		<section class="py-lg-18 py-md-10 py-8 bg-dark" id="myexperiences">
            <div class="container">
                <!--row-->
                <div class="row">
                    <div class="col-xl-7 col-md-12  col-lg-8 col-12">
                        <div class="mb-lg-8 mb-5">
                            <!--text-->
                            <h2 class="mb-4"> My <span class="text-primary">Experiences</span></h2>
                            <p class="mb-0">There are many variations of passages ofLorem Ipsum
                                available, but the majority havesuffered alteration in some form, by injected humour,
                            </p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <!--col-->
                    <div class="col-xl-4 col-md-6 col-lg-4 col-12">
                        <!--card start-->
                        <div class="card mb-4 border-0">
                            <!--card body-->
                            <div class="card-body p-5">
                                <div class="mb-3">
                                    <!--text-->
                                    <h5 class="mb-3">June-2002 - 2020</h5>
                                    <h4 class="mb-2 text-primary">UX/UI Designer</h4>
                                    <span>Figma</span>
                                </div>
                                <p class="mb-0">There are many variations of passages ofLorem Ipsumavailable, but the
                                    majority
                                    havesuffered
                                    alteration in some
                                </p>
                                <!--text-->
                            </div>
                        </div>
                        <!--card end-->
                    </div>
                    <!--col-->
                    <div class="col-xl-4 col-md-6 col-lg-4 col-12">
                        <!--card start-->
                        <div class="card mb-4  border-0">
                            <!--card body-->
                            <div class="card-body p-5">
                                <div class="mb-3">
                                    <!--text-->
                                    <h5 class="mb-3">June-2002 - 2020</h5>
                                    <h4 class="mb-2 text-primary">Product Designer</h4>
                                    <span>Adobe Photoshop</span>
                                </div>
                                <p class=" mb-0">There are many variations of passages ofLorem Ipsumavailable, but the
                                    majority
                                    havesuffered
                                    alteration in some
                                </p>
                                <!--text-->
                            </div>
                        </div>
                        <!--card end-->
                    </div>
                    <!--col-->
                    <div class="col-xl-4 col-md-6  col-lg-4 col-12">
                        <!--card-->
                        <div class="card border-0 mb-4">
                            <!--card-body-->
                            <div class="card-body p-5">
                                <div class="mb-3">
                                    <!--text-->
                                    <h5 class="mb-3">June-2002 - 2020</h5>
                                    <h4 class="mb-2 text-primary">Graphic Designer</h4>
                                    <span>Adobe Photoshop</span>
                                </div>
                                <p class="mb-0">There are many variations of passages ofLorem Ipsumavailable, but the
                                    majority
                                    havesuffered
                                    alteration in some
                                </p>
                                <!--text-->
                            </div>
                        </div>
                        <!--card end-->
                    </div>
                </div>
            </div>
        </section>
`
});Vvveb.Sections.add("about-me/my-portfolio", {
    name: "My portfolio",
    image: Vvveb.themeBaseUrl + "/screenshots/about-me/my-portfolio-thumb.jpeg",
    html: `	<section class="py-lg-18 py-md-10 py-8" id="myportfolio">
            <div class="container">
                <!--row-->
                <div class="row">
                    <div class="col-xl-6 offset-xl-3 col-md-12  col-lg-8 offset-lg-2 col-12">
                        <!--text-->
                        <div class="text-center mb-5 mb-lg-8">
                            <!--title-->
                            <h2 class="mb-4">My <span class="text-primary">Portfolio</span></h2>

                            <p class="mb-0">There are many variations of passages ofLorem Ipsum
                                available, but the majority havesuffered alteration in some
                                form, by injected humour.</p>
                        </div>
                        <!--text-->
                    </div>
                </div>
                <div class="row">
                    <!--col-->
                    <div class="col-xl-6 col-md-6 col-12">
                        <!--image-->
                        <a class="mb-4 d-block" href="#">
                            <img src="./images/portfolio-1.jpg" alt="portfolio" class="img-fluid w-100 rounded-3">
                        </a>
                    </div>
                    <div class="col-xl-6 col-md-6 col-12">
                        <div class="row">
                            <div class="col-xl-6 col-md-6 col-12">
                                <!--image-->
                                <a class="mb-4 d-block" href="#">
                                    <img src="./images/portfolio-2.jpg" alt="portfolio"
                                        class="img-fluid w-100 rounded-3">
                                </a>
                            </div>
                            <div class="col-xl-6 col-md-6 col-12">
                                <!--image-->
                                <a class="mb-4 d-block" href="#">
                                    <img src="./images/portfolio-3.jpg" alt="portfolio"
                                        class="img-fluid w-100 rounded-3">
                                </a>
                            </div>
                            <div class="col-xl-6 col-md-6 col-12">
                                <!--image-->
                                <a class="mb-4 d-block" href="#">
                                    <img src="./images/portfolio-4.jpg" alt="portfolio"
                                        class="img-fluid w-100 rounded-3">
                                </a>
                            </div>
                            <div class="col-xl-6 col-md-6 col-12">
                                <!--image-->
                                <a class="mb-4 d-block" href="#">
                                    <img src="./images/portfolio-5.jpg" alt="portfolio"
                                        class="img-fluid w-100 rounded-3">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
`
});Vvveb.Sections.add("about-me/my-service", {
    name: "My service",
    image: Vvveb.themeBaseUrl + "/screenshots/about-me/my-service-thumb.jpeg",
    html: `	<section class=" py-lg-18 py-md-10 py-8 bg-dark" id="myservice">
            <div class="container">
                <!--row-->
                <div class="row">
                    <div class="col-xl-5 col-md-12  col-lg-6 col-12">
                        <div class="mb-lg-8 mb-5">
                            <!--text-->
                            <!--title-->
                            <h2 class="mb-4">My <span class="text-primary">Service</span></h2>

                            <p class="mb-0">There are many variations of passages ofLorem Ipsum
                                available, but the majority havesuffered alteration in some
                                form, by injected humour,</p>
                            <!--text-->
                        </div>
                    </div>
                </div>

                <div class="row">
                    <!--service-->
                    <div class="col-xl-4 col-md-6 col-lg-4  col-12">
                        <!--card start-->
                        <div class="card text-center border-0 mb-4  mb-lg-0">
                            <!--card body-->
                            <div class="card-body p-5">
                                <div class="mb-5">
                                    <!--icon-->
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"
                                        fill=" var(--bs-primary)" class="bi bi-megaphone" viewBox="0 0 16 16">
                                        <path
                                            d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-.214c-2.162-1.241-4.49-1.843-6.912-2.083l.405 2.712A1 1 0 0 1 5.51 15.1h-.548a1 1 0 0 1-.916-.599l-1.85-3.49a68.14 68.14 0 0 0-.202-.003A2.014 2.014 0 0 1 0 9V7a2.02 2.02 0 0 1 1.992-2.013 74.663 74.663 0 0 0 2.483-.075c3.043-.154 6.148-.849 8.525-2.199V2.5zm1 0v11a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-1 0zm-1 1.35c-2.344 1.205-5.209 1.842-8 2.033v4.233c.18.01.359.022.537.036 2.568.189 5.093.744 7.463 1.993V3.85zm-9 6.215v-4.13a95.09 95.09 0 0 1-1.992.052A1.02 1.02 0 0 0 1 7v2c0 .55.448 1.002 1.006 1.009A60.49 60.49 0 0 1 4 10.065zm-.657.975 1.609 3.037.01.024h.548l-.002-.014-.443-2.966a68.019 68.019 0 0 0-1.722-.082z" />
                                    </svg>
                                </div>
                                <div>
                                    <!--title-->
                                    <h3 class="mb-3">Digital Marketing</h3>
                                    <p class="mb-0 ">There are many variations of passages ofLorem Ipsumavailable, but
                                        the majority
                                        havesuffered
                                        alteration in some </p>
                                </div>
                            </div>
                        </div>
                        <!--card end-->
                    </div>
                    <!--service-->
                    <!--service-->
                    <div class="col-xl-4 col-md-6 col-lg-4 col-12">
                        <!--card start-->
                        <div class="card text-center border-0 mb-4 mb-md-0">
                            <!--card body-->
                            <div class="card-body p-5">
                                <div class="mb-5">
                                    <!--icon-->
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"
                                        fill=" var(--bs-primary)" class="bi bi-window-stack" viewBox="0 0 16 16">
                                        <path
                                            d="M4.5 6a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM6 6a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
                                        <path
                                            d="M12 1a2 2 0 0 1 2 2 2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2 2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10ZM2 12V5a2 2 0 0 1 2-2h9a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1Zm1-4v5a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V8H3Zm12-1V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v2h12Z" />
                                    </svg>
                                </div>
                                <div>
                                    <!--title-->
                                    <h3 class="mb-3">Web Devlopment</h3>
                                    <p class="mb-0">There are many variations of passages ofLorem Ipsumavailable, but
                                        the majority
                                        havesuffered
                                        alteration in some </p>
                                </div>
                            </div>
                        </div>
                        <!--card end-->
                    </div>
                    <!--service-->
                    <div class="col-xl-4 col-md-6 col-lg-4 col-12">
                        <!--card-->
                        <div class="card text-center border-0">
                            <!--card body-->
                            <div class="card-body p-5">
                                <div class="mb-5">
                                    <!--icon-->
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"
                                        fill=" var(--bs-primary)" class="bi bi-bezier" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                            d="M0 10.5A1.5 1.5 0 0 1 1.5 9h1A1.5 1.5 0 0 1 4 10.5v1A1.5 1.5 0 0 1 2.5 13h-1A1.5 1.5 0 0 1 0 11.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm10.5.5A1.5 1.5 0 0 1 13.5 9h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM6 4.5A1.5 1.5 0 0 1 7.5 3h1A1.5 1.5 0 0 1 10 4.5v1A1.5 1.5 0 0 1 8.5 7h-1A1.5 1.5 0 0 1 6 5.5v-1zM7.5 4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z" />
                                        <path
                                            d="M6 4.5H1.866a1 1 0 1 0 0 1h2.668A6.517 6.517 0 0 0 1.814 9H2.5c.123 0 .244.015.358.043a5.517 5.517 0 0 1 3.185-3.185A1.503 1.503 0 0 1 6 5.5v-1zm3.957 1.358A1.5 1.5 0 0 0 10 5.5v-1h4.134a1 1 0 1 1 0 1h-2.668a6.517 6.517 0 0 1 2.72 3.5H13.5c-.123 0-.243.015-.358.043a5.517 5.517 0 0 0-3.185-3.185z" />
                                    </svg>
                                </div>
                                <div>
                                    <!--title-->
                                    <h3 class="mb-3">Creative Graphic Design</h3>

                                    <p class="mb-0">There are many variations of passages ofLorem Ipsumavailable, but
                                        the majority
                                        havesuffered
                                        alteration in some </p>
                                </div>
                            </div>
                        </div>
                        <!--card-->
                    </div>
                    <!--service-->
                </div>
            </div>
        </section>
`
});Vvveb.Sections.add("about-me/navigation", {
    name: "Navigation",
    image: Vvveb.themeBaseUrl + "/screenshots/about-me/navigation-thumb.jpeg",
    html: `<section id="navigation" data-v-save-global="index.html,#navigation">
	<nav class="navbar navbar-expand-md navbar-dark bg-dark bg-opacity-75 sticky-md-top ">
		<div class="container">
			  <div data-v-component-site>	
					<a class="navbar-brand" href="/" data-v-url-params='{"host":"www.*.*"}'><span class="visually-hidden">Logo</span>
					   <!--
					   <img src="./images/header-logo.svg" alt="Site logo" loading="lazy" class="logo-default" data-v-site-logo>
					   <img src="./images/header-logo.svg" alt="Site logo sticky" loading="lazy" class="logo-sticky" data-v-site-logo-sticky>
					   -->
					   <img src="./images/header-logo.svg" alt="Site logo dark" loading="lazy" class="logo-default-dark" data-v-site-logo-dark>
					   <!--
					   <img src="./images/header-logo.svg" alt="Site logo dark sticky" loading="lazy" class="logo-default-dark-sticky" data-v-site-logo-dark-sticky>
					   -->
					</a>
				</div>
				
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
				aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			
			  <div class="collapse navbar-collapse" id="navbar" data-v-component-menu="header" data-v-slug="main-menu">
	<ul class="navbar-nav ms-auto" data-v-menu-items>
	  <li class="nav-item dropdown position-static" data-v-menu-item data-v-class-if-has-dropdown="category.children > 0" data-v-class-if-position-static="category.has-text">
		
		<a class="nav-link dropdown-toggle" href="#" data-v-class-if-dropdown-toggle="category.children > 0" aria-expanded="false" data-v-menu-item-url>
			<span data-v-menu-item-name data-v-if-not="category.type = 'text'"></span>
			<span data-v-menu-item-content>
				<p><img src="/media/vvveb.svg" height="24" alt="" class="me-2">Mega menu</p>
			</span>
		</a>
		
		<div class="dropdown-menu" data-v-menu-item-recursive>
		  <div data-v-menu-item class="nav-item" data-v-class-if-dropdown="category.children > 0">
			<a class="dropdown-item" href="https://github.com/givanz/VvvebJs/wiki" data-v-menu-item-url>
				<span data-v-menu-item-name data-v-if-not="category.type = 'text'"></span>
				<span data-v-menu-item-content>
					<div class="row">
						<div class="col-6 align-self-center"><img src="img/demo/video-1.jpg" alt="Post" width="250" loading="lazy" class="rounded img-fluid"></div>
						<div class="col-6">
							<h4>Features</h4>
							<p class="text-muted">Just a few mentions, but there is more</p>
							<ul class="list-unstyled">
								<li class="text-primary">Page builder</li>
								<li class="text-primary">Mega menu</li>
								<li class="text-primary">Multi language</li>
								<li class="text-primary">Advanced SEO</li>
								<li class="text-primary">Ecommerce</li>
							</ul>
						</div>
					</div>
				</span>
			</a>
		  </div> 
		  <div data-v-menu-item class="nav-item" data-v-class-if-dropdown="category.children > 0">
			<a class="dropdown-item" href="https://github.com/givanz/VvvebJs/wiki" data-v-menu-item-url>
				<span data-v-menu-item-name data-v-if-not="category.type = 'text'">Developer Documentation</span>
				<span data-v-menu-item-content></span>
			</a>
		  </div> 
		</div>
	  </li>
	  <li class="nav-item dropdown" data-v-menu-item>
		<a class="nav-link dropdown-toggle" href="https://blog.vvveb.com"  data-v-menu-item-url><span data-v-menu-item-name>Blog</span></a>
		
			<div class="dropdown-menu" data-v-menu-item-recursive>
			  <div data-v-menu-item class="nav-item" data-v-class-if-dropdown="category.children > 0">
				<a class="dropdown-item" href="https://github.com/givanz/VvvebJs/wiki" data-v-menu-item-url>
					<span data-v-menu-item-name data-v-if-not="category.type = 'text'">User Documentation</span>
					<span data-v-menu-item-content></span>
				</a>
			  </div> 
			  <div data-v-menu-item class="nav-item" data-v-class-if-dropdown="category.children > 0">
				<a class="dropdown-item" href="https://github.com/givanz/VvvebJs/wiki" data-v-menu-item-url>
					<span data-v-menu-item-name data-v-if-not="category.type = 'text'">Developer Documentation</span>
					<span data-v-menu-item-content></span>
				</a>
			  </div> 
			</div>
	  </li>
	  <li class="nav-item" data-v-menu-item>
		<a class="nav-link" href="#aboutme"  data-v-menu-item-url><span data-v-menu-item-name>About</span></a>
	  </li>
	  <li class="nav-item" data-v-menu-item>
		<a class="nav-link" href="contactme"  data-v-menu-item-url><span data-v-menu-item-name>Contact</span></a>
	  </li>
		<li class="nav-item" data-v-menu-item>
			<a class="nav-link active" aria-current="page" href="#home">Home</a>
		</li>
		<li class="nav-item" data-v-menu-item>
			<a class="nav-link" href="#myservice">Service</a>
		</li>
		<li class="nav-item" data-v-menu-item>
			<a class="nav-link" href="#myportfolio">Portfolio</a>
		</li>
		<li class="nav-item" data-v-menu-item>
			<a class="nav-link" href="#myexperiences">Resume</a>
		</li>
	</ul>
<!--
	<div class="search-area toggle-hover">
		<form action="/search" method="get" data-v-action="/search">
			<input type="hidden" name="route" value="search">
			<div class="input-group">
				<input type="search" name="search" class="form-control" id="headerSearch" placeholder="Type for search" data-v-vvveb-action="search" data-v-vvveb-on="keyup">
				<button class="btn border-0" type="submit" title="Search">
					<div class="la-flip-horizontal">
						<i class="la la-search la-lg" aria-hidden="true"></i>
					</div>
				</button>
			</div>			  
		</form>
	</div>
-->	
  </div>

			
		</div>
	</nav>
</section>
`
});
	Vvveb.SectionsGroup["About me"] = ["about-me/about-me","about-me/contact-me","about-me/footer","about-me/hero","about-me/my-experiences","about-me/my-portfolio","about-me/my-service","about-me/navigation"];
