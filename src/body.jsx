export function Body(){
    return(
        <div className="singBox" color="white" width="50%">

            <h1>Sign in</h1>
            <p>stay updated on your profession world
            </p>
            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label for="floatingInput">Email or Phone</label>
            </div>
            <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" display="password" />
                <label for="floatingPassword">Password</label>
            </div>
            <a href="#" className="a">forgot password?</a>
            <div>
            <button type="button" className=" button btn-primary" >  Sign in </button>
            </div>

        </div>
    );
}
