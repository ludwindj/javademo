package com.nabenik.rest;

import com.nabenik.dao.PostDao;
import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.OptimisticLockException;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;
import javax.ws.rs.core.UriBuilder;
import com.nabenik.model.Post;
import javax.inject.Inject;

/**
 *
 */
@Stateless
@Path("/posts")
@Produces("application/json")
@Consumes("application/json")
public class PostEndpoint {

    @Inject
    PostDao postService;

    @POST
    public Response create(Post entity) {
        postService.create(entity);

        return Response.created(
                UriBuilder.fromResource(PostEndpoint.class)
                        .path(String.valueOf(entity.getId())).build()).build();
    }

    @DELETE
    @Path("/{id:[0-9][0-9]*}")
    public Response deleteById(@PathParam("id") Long id) {
        Post entity = postService.findById(id);
        if (entity == null) {
            return Response.status(Status.NOT_FOUND).build();
        }
        postService.deleteById(id);
        return Response.noContent().build();
    }

    @GET
    @Path("/{id:[0-9][0-9]*}")
    public Response findById(@PathParam("id") Long id) {

        Post entity = postService.findById(id);
        if (entity == null) {
            return Response.status(Status.NOT_FOUND).build();
        }
        return Response.ok(entity).build();
    }

    @GET
    public List<Post> listAll(@QueryParam("start") Integer startPosition,
            @QueryParam("max") Integer maxResult) {
        
        final List<Post> results = postService.listAll(startPosition, maxResult);
        return results;
    }

    @PUT
    @Path("/{id:[0-9][0-9]*}")
    public Response update(@PathParam("id") Long id, Post entity) {
        if (entity == null) {
            return Response.status(Status.BAD_REQUEST).build();
        }
        if (id == null) {
            return Response.status(Status.BAD_REQUEST).build();
        }
        if (!id.equals(entity.getId())) {
            return Response.status(Status.CONFLICT).entity(entity).build();
        }
        if (postService.findById(id) == null) {
            return Response.status(Status.NOT_FOUND).build();
        }
        try {
            entity = postService.update(entity);
        } catch (OptimisticLockException e) {
            return Response.status(Response.Status.CONFLICT)
                    .entity(e.getEntity()).build();
        }

        return Response.ok(entity).build();
    }
}
