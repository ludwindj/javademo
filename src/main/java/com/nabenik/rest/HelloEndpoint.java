package com.nabenik.rest;

import java.util.List;

import javax.enterprise.context.RequestScoped;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;

import com.nabenik.model.Post;

@RequestScoped
@Path("/hello")
@Produces("text/plain")
@Consumes("text/plain")
public class HelloEndpoint {

	@GET
    public String doHello() {
        
        return "Java is everywhere https://www.youtube.com/watch?v=zg79C7XM1Xs";
    }
}
