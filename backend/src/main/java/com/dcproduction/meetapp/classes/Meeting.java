package com.dcproduction.meetapp.classes;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.json.JSONArray;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("MeetingCluster") //@Document specifies the name of the collection in mongodb
public class Meeting {
    @Id
    private String id;

    private String name;
    private String url;
    private String timezone;
    private int startTime;  //stored as an integer 0-24
    private int endTime;
    // private LocalDate startDate;
    // private LocalDate endDate;

    // @DBRef
    private List<String> dates;
    private List<User> users;
    // private List<String> users;

    //the constructor
    public Meeting(String name, String url, String timezone, int startTime, 
            int endTime, List<String> dates, List<User> users) {
    // super();
        // this.id = id;
        this.name = name;
        this.url = url;
        this.timezone = timezone;
        this.startTime = startTime;
        this.endTime = endTime;
        // this.startDate = startDate;
        // this.endDate = endDate;
        this.dates = dates;
        this.users = users;
    }

    public Meeting(){}

    public String getId(){
        return this.id;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUrl() {
        return this.url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getTimezone() {
        return this.timezone;
    }

    public void setTimezone(String timezone) {
        this.timezone = timezone;
    }

    public int getStartTime() {
        return this.startTime;
    }

    public void setStartTime(int startTime) {
        this.startTime = startTime;
    }

    public int getEndTime() {
        return this.endTime;
    }

    public void setEndTime(int endTime) {
        this.endTime = endTime;
    }

    // public LocalDate getStartDate() {
    //     return this.startDate;
    // }

    // public void setStartDate(LocalDate startDate) {
    //     this.startDate = startDate;
    // }

    // public LocalDate getEndDate() {
    //     return this.endDate;
    // }

    // public void setEndDate(LocalDate endDate) {
    //     this.endDate = endDate;
    // }

    public List<User> getUsers() {
        return this.users;
    }

    public void setUsers(List<User> users) {
        this.users = users;
    }
}
