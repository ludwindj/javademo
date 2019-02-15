package com.nabenik.dao;

import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import com.nabenik.model.Post;

/**
 * DAO for Post
 */
@Stateless
public class PostDao {
	@PersistenceContext(unitName = "demo-persistence-unit")
	private EntityManager em;

	public void create(Post entity) {
		em.persist(entity);
	}

	public void deleteById(Long id) {
		Post entity = em.find(Post.class, id);
		if (entity != null) {
			em.remove(entity);
		}
	}

	public Post findById(Long id) {
		return em.find(Post.class, id);
	}

	public Post update(Post entity) {
		return em.merge(entity);
	}

	public List<Post> listAll(Integer startPosition, Integer maxResult) {
		TypedQuery<Post> findAllQuery = em.createQuery(
				"SELECT DISTINCT p FROM Post p ORDER BY p.id", Post.class);
		if (startPosition != null) {
			findAllQuery.setFirstResult(startPosition);
		}
		if (maxResult != null) {
			findAllQuery.setMaxResults(maxResult);
		}
		return findAllQuery.getResultList();
	}
}
