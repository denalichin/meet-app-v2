package com.dcproduction.meetapp.classes;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

// @Document("User")
public class User {
    @Id
    private String id;
    
    private String username;
    private String password;
    private int[] availability;

    public User(String username, String password, int[] availability){
        this.username = username;
        this.password = password;
        this.availability = availability;
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public int[] getAvailability() {
        return this.availability;
    }

    public void setAvailability(int[] availability) {
        this.availability = availability;
    }

}
