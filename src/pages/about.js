import React from "react"
import {Link} from "gatsby"
import PrimaryLayout from "../layout/PrimaryLayout"

export default () => (
<PrimaryLayout>
<div className="container">
    <h1>This is gatsby</h1>
    <p>Hello gatsby!</p>
    <p><Link to="/test/">Page 2</Link></p>
    <div className="row justify-content-md-center">
        <div className="col-xs-6">
           <h1>About us</h1>
           <p>This is about us</p>
        </div>
    </div>
    </div>
</PrimaryLayout>
)
