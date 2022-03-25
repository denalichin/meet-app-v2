package com.dcproduction.meetapp;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import com.dcproduction.meetapp.classes.Meeting;
import com.dcproduction.meetapp.classes.User;
import com.dcproduction.meetapp.repositories.ItemRepository;
import com.dcproduction.meetapp.repositories.MeetingRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

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

		int temp_availability[] = { 1, 2, 3, 4, 5 };

		tempUsers.add(new User("Mark", "Caddy", temp_availability));
		tempUsers.add(new User("Bill", "Bobby", temp_availability));
		// tempUsers.add("bob");
		// tempUsers.add("mark caddy");


		Meeting testMeeting1 = new Meeting("99", "test meeting", "temporary_url", "pacific", "9:00 am", "9:00 pm", LocalDate.parse("2022-01-01"), LocalDate.parse("2022-09-09"), tempUsers);
		Meeting testMeeting2 = new Meeting("100", "test meeting2", "temporary_url2", "Eastern", "8:00 am", "10:00 pm", LocalDate.parse("2020-01-01"), LocalDate.parse("2023-09-09"), tempUsers);
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
