//TEST CLASS

package com.dcproduction.meetapp.classes;

import org.springframework.data.annotation.Id;

public class GroceryItem {

        @Id
        private String id;

        private String name;
        private int quantity;
        private String category;

        public GroceryItem(String id, String name, int quantity, String category) {
            super();
            this.id = id;
            this.name = name;
            this.quantity = quantity;
            this.category = category;
        }

        public String getName() {
            return this.name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public int getQuantity() {
            return this.quantity;
        }

        public void setQuantity(int quantity) {
            this.quantity = quantity;
        }

        public String getCategory() {
            return this.category;
        }

        public void setCategory(String category) {
            this.category = category;
        }
        

}

