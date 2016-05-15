package com.abmv.angular.attack.utils;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class Tuple<E, T> {
	private E first;
	private T second;
}
