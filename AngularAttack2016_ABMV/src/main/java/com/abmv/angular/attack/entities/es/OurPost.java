package com.abmv.angular.attack.entities.es;

import org.hibernate.validator.constraints.NotEmpty;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class OurPost {
	@NotEmpty(message="Saved you from empty post ;-)")
	String post;
}
