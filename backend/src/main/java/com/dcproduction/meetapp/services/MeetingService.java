package com.dcproduction.meetapp.services;

import java.util.List;

import com.dcproduction.meetapp.classes.Meeting;
import com.dcproduction.meetapp.classes.User;
import com.dcproduction.meetapp.repositories.MeetingRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MeetingService {

    @Autowired
    MeetingRepository meetingDB;

    public List<Meeting> getAllMeetings(){
        return meetingDB.findAll();
    }
    public Meeting findMeeting(String meetingName){
        return meetingDB.findMeeting(meetingName);
    }

    // public List<User> findUsers(String meetingName){
    //     return meetingDB.findUsers(meetingName);
    // }
}
