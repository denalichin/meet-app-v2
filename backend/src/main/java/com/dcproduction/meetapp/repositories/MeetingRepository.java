package com.dcproduction.meetapp.repositories;

import java.util.List;

import com.dcproduction.meetapp.classes.Meeting;
import com.dcproduction.meetapp.classes.User;

import org.bson.json.JsonObject;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;


//must be an interface
//extends MongoRepository
// @Component
@Repository
public interface MeetingRepository extends MongoRepository<Meeting, String> {

    // @Query("{name:'?0'}")
    @Query(value="{ name : '?0'}", fields="{users : { password : 0}}")
    Meeting findMeeting(String meetingName); //we could name this function anything
    // public Meeting getById(String id);
   
    @Query(value="{ name : '?0'}", fields="{users : { username : 1, availability: 1}}") //not being used for now
    String findUsers(String meetingName);

    //findById may return a null, while getById always returns an object, even if entry doesn't exist

    // @Query(value="{category:'?0'}", fields="{'name' : 1, 'quantity' : 1}")
    // List<GroceryItem> findAll(String category);


    // template.query(Person.class).distinct("lastname").all();   
//     List<Person> result = template.query(Person.class)
//   .matching(query(where("age").lt(50).and("accounts.balance").gt(1000.00d)))
//   .all();
}
