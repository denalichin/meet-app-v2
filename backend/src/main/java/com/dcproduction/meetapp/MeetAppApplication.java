package com.dcproduction.meetapp;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.dcproduction.meetapp.classes.Meeting;
import com.dcproduction.meetapp.classes.User;
import com.dcproduction.meetapp.repositories.ItemRepository;
import com.dcproduction.meetapp.repositories.MeetingRepository;
import com.fasterxml.jackson.core.JsonGenerationException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.json.JSONObject;

@SpringBootApplication
public class MeetAppApplication implements CommandLineRunner{

	@Autowired
    // ItemRepository Testeroni;
	MeetingRepository meetingDB;
	public static void main(String[] args) {
		SpringApplication.run(MeetAppApplication.class, args);
	}

	//When running the application, here is where we can initailize some test data
	@Override
	public void run(String... args) throws Exception {

		System.out.println("inserting testing object into MONGO DB DIRECTORY...");

		meetingDB.deleteAll();
		List<User> tempUsers = new ArrayList<User>();
		// List<String> tempUsers = new ArrayList();

		List<int[]> temp_hours = new ArrayList<int[]> ();

		int[] arr1 = {0,1};
		int[] arr2 = {5,9};
		int[] arr3 = {11,13};

		temp_hours.add(arr1);
		temp_hours.add(arr2);
		temp_hours.add(arr3);

		Map<String, List<int[]>> temp_availability = new HashMap<String, List<int[]>>();
		temp_availability.put("2022-01-01", temp_hours);

		// int temp_availability[] = { 1, 2, 3, 4, 5 };

		tempUsers.add(new User("Mark", "Caddy", temp_availability));
		tempUsers.add(new User("Bill", "Bobby", temp_availability));
		// tempUsers.add("bob");
		// tempUsers.add("mark caddy");


		Meeting testMeeting1 = new Meeting("test meeting", "temporary_url", "pacific", 8, 21, null, tempUsers);
		Meeting testMeeting2 = new Meeting("test meeting2", "temporary_url2", "Eastern", 8, 22, null, tempUsers);
		meetingDB.save(testMeeting1);
		meetingDB.save(testMeeting2);
		System.out.println("FINISHED.");

		// Rule 1: embed unless there is a compelling reason not to
		// Rule 2: avoid JOINS if they can be avoided
		// Rule 3: array should never grow without bound
		// Rule 4: an object should not be embedded if it needs to be accessed individually

		// System.out.println("Clearing db");
		// Testeroni.deleteAll();

		// System.out.println("Data creation started...");
        // Testeroni.save(new GroceryItem("first_id", "Whole Wheat Biscuit", 5, "snacks"));
		// Testeroni.save(new GroceryItem("second_id", "Whole Wheat Biscuit", 5, "snacks"));
		// Testeroni.save(new GroceryItem("third_id", "Whole Wheat Biscuit", 5, "snacks"));
		// Testeroni.save(new GroceryItem("fourth_id", "Whole Wheat Biscuit", 5, "snacks"));

	}

}
