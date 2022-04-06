package com.dcproduction.meetapp.controllers;

import java.io.IOException;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import com.dcproduction.meetapp.classes.Meeting;
import com.dcproduction.meetapp.classes.Test;
import com.dcproduction.meetapp.classes.User;
import com.dcproduction.meetapp.repositories.MeetingRepository;
import com.dcproduction.meetapp.services.MeetingService;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.apache.tomcat.util.json.JSONParser;
import org.bson.json.JsonObject;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



//creating the rest API. url commands call commands on the repository
@CrossOrigin("*")//REMOVE WHEN DONE TESTING this is needed or else frontend is denied access for now
@RestController
@RequestMapping("meet-app")
public class MeetingController {
    
    @Autowired
    MeetingService service;

    @Autowired
    MeetingRepository meetingDB;

    @GetMapping
    public List<Meeting> fetchAllMeetings() {
        System.out.println("RETURNING ALL MEETINGS");
        return service.getAllMeetings();
        // return this.meetingDB.findAll();
    }
    
    @GetMapping("/findmeeting")
    public Meeting findMeeting() {
        System.out.println("FINDING MEETING");
        return service.findMeeting("test meeting");
        // return this.meetingDB.findAll();
    }

    @PostMapping("/create")
    public String createMeeting(@RequestBody String meetingString){
        System.out.println("meeting recieved: " + meetingString);

        JSONObject obj = new JSONObject(meetingString);

        int spacesToIndentEachLevel = 3;
        
        System.out.println("TEST: PRINTING OUT JSON ");
        System.out.println(obj.toString(spacesToIndentEachLevel));

        //prepare dates array
        ArrayList<String> dates = new ArrayList<String>();     
        JSONArray jArray = obj.getJSONArray("dates"); 
        if (jArray != null) { 
           for (int i=0;i<jArray.length();i++){ 
            dates.add(jArray.getString(i));
           } 
        } 

        Meeting meetingObj = new Meeting(
            obj.getString("name"), 
            obj.getString("url"), 
            obj.getString("timezone"), 
            obj.getInt("startTime"), 
            obj.getInt("endTime"), 
            // LocalDate.parse(obj.getString("startDate")), 
            // LocalDate.parse(obj.getString("endDate")), 
            dates,
            new ArrayList<User>());

        
           
        

        // System.out.println("Array: " + dates);

        System.out.println("CREATED object " + meetingObj.getName());

         service.createMeeting(meetingObj);
        //  System.out.println(meetingObj.getId());
         return meetingObj.getId();
    }


    // @PostMapping("/users/insert")
    // public void insertUser(@RequestBody Users newUser) {
    //     ArrayList<String> emptyArr = new ArrayList<String>();
    //     newUser.role = "new_user";
    //     newUser.company_id = "-1";
    //     newUser.liked_posts = emptyArr;
    //     newUser.posts = emptyArr;

    //     System.out.println("adding user to the DB");
    //     this.userServer.insert(newUser);
    // }


    // @GetMapping("/finduser") //TEMPORARY make this call from service, not from db
    // String findUser() {
    //     System.out.println("FINDING USER");
    //     return meetingDB.findUsers("test meeting");
    //     // return this.meetingDB.findAll();
    // }
}
