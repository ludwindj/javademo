/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.nabenik.managed;

import com.nabenik.model.Post;
import javax.inject.Named;
import javax.enterprise.context.Dependent;
import javax.faces.bean.ViewScoped;

/**
 *
 * @author ludwin.ayala
 */
@Named(value = "itemMB")
@ViewScoped
public class itemMB {
    private Post item;
    /**
     * Creates a new instance of itemMB
     */
    public itemMB() {
        item = new Post();
    }

    public Post getItem() {
        return item;
    }

    public void setItem(Post item) {
        this.item = item;
    }
    
}
