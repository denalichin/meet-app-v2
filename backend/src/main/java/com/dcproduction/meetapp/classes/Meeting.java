package com.dcproduction.meetapp.classes;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

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
    private String startTime;
    private String endTime;
    private LocalDate startDate;
    private LocalDate endDate;

    // @DBRef
    private List<User> users;
    // private List<String> users;

    //the constructor
    public Meeting(String id, String name, String url, String timezone, String startTime, 
            String endTime, LocalDate startDate, LocalDate endDate, List<User> users) {
    // super();
    this.id = id;
    this.name = name;
    this.url = url;
    this.timezone = timezone;
    this.startTime = startTime;
    this.endTime = endTime;
    this.startDate = startDate;
    this.endDate = endDate;
    this.users = users;
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

    public String getStartTime() {
        return this.startTime;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }

    public String getEndTime() {
        return this.endTime;
    }

    public void setEndTime(String endTime) {
        this.endTime = endTime;
    }

    public LocalDate getStartDate() {
        return this.startDate;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public LocalDate getEndDate() {
        return this.endDate;
    }

    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }

    public List<User> getUsers() {
        return this.users;
    }

    public void setUsers(List<User> users) {
        this.users = users;
    }
}
