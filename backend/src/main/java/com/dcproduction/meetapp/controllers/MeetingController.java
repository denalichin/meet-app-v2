package com.dcproduction.meetapp.controllers;

import java.io.IOException;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.dcproduction.meetapp.classes.Meeting;
import com.dcproduction.meetapp.classes.Test;
import com.dcproduction.meetapp.classes.User;
import com.dcproduction.meetapp.repositories.MeetingRepository;
import com.dcproduction.meetapp.services.MeetingService;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.mongodb.client.result.UpdateResult;

import org.apache.tomcat.util.json.JSONParser;
import org.bson.json.JsonObject;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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

    @Autowired
    MongoTemplate mongoTemplate;

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

    @PostMapping("/adduser")
    public String addUser(@RequestBody String meetingString){
        System.out.println("TESTING ADD USER USER " + meetingString);

        // JSONObject obj = new JSONObject(meetingString);

        // int spacesToIndentEachLevel = 3;

        System.out.println(service.findMeeting(meetingString));
        
        System.out.println("TEST: PRINTING OUT JSON ");
        // System.out.println(obj.toString(spacesToIndentEachLevel));
        return "Server Test Return";
    }

    @PutMapping("/updateuser/{username}")
    public String updateUser(@RequestBody String meetingString){
        System.out.println("TESTING UPDATE USER " + meetingString);


        // PLEASE READ: https://stackoverflow.com/questions/41377883/how-to-perform-partial-update-with-spring-data-mongodbmongooperations
        Query query = new Query();
        query.addCriteria(
            new Criteria().andOperator(
                Criteria.where("name").is("test meeting"),
                // Criteria.where("name").is("test meeting")));
                Criteria.where("users.username").is("Mark")));//.and(Criteria.where("username").is("Mark")));

        // List<Meeting> testQuery = mongoTemplate.find(query,Meeting.class);


        // System.out.println(testQuery);
        // System.out.println(Arrays.toString(testQuery.toArray()));

        // System.out.println(query);

        List<int[]> temp_hours = new ArrayList<int[]> ();
        int[] arr1 = {10,11};
		int[] arr2 = {11,12};
		int[] arr3 = {77,99};

		temp_hours.add(arr1);
		temp_hours.add(arr2);
		temp_hours.add(arr3);;

        Update testUpdate = new Update();

        // https://www.tutorialsteacher.com/mongodb/update-arrays   <<<---- READ THIS
        // testUpdate.set("users.0.availability.2022-01-01", temp_hours);
        String date = "2022-01-02";
        testUpdate.set("users.$[selector].availability." + date, temp_hours)
            .filterArray(Criteria.where("selector.username").is("Mark"));

        UpdateResult updateResult = mongoTemplate.updateFirst(query, testUpdate, Meeting.class); //updateFirst(query, testUpdate, Meeting.class);

        // List<Meeting> updateResult = mongoTemplate.find(query,Meeting.class); 
        System.out.println(updateResult);

        // System.out.println(meetingDB.testUpdate());

        System.out.println("USER UPDATED?????? ");
        // System.out.println(obj.toString(spacesToIndentEachLevel));
        
        return "Server Test Return";
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
