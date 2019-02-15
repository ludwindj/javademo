package com.nabenik.rest;

import javax.enterprise.context.RequestScoped;
import javax.ws.rs.Consumes;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

@RequestScoped
@Path("")
@Produces("text/plain")
@Consumes("text/plain")
public class AuthcEndpoint {

}
