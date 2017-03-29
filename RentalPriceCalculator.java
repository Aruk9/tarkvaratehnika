package rental;

public class RentalPriceCalculator {
	
	// age - age of driver
	// licence - number of full years person holds driving licence
	// clazz(carClass) - class of the car from 1 (smallest) to 5 (largest) that person wishes to rent
	// acc(causedAccidents) - has s/he caused any accidents within last year
	// acc2(participatedAccidents) - has s/he participated (but not caused) in any accidents within last year
	// season - if it is high season or not
	public double price(int age, int licence, int carClass, boolean causedAccidents, boolean participatedAccidents, boolean season) {
		
		carRentalForUnderaged(age);
		
		adaptRentalForHighClassCars(age, carClass);
		
		double rentalprice = minimumRentalPrice(age);
		
		rentalprice = adaptPriceOnClassAgeAndSeason(age, carClass, season, rentalprice);
		
		rentCarWithFreshLicense(licence);
		
		rentalprice = adaptPriceDependingOnLicenseAge(licence, rentalprice);
		
		rentalprice = adaptPriceByCausedAccidents(age, causedAccidents, rentalprice);

		return adaptMaxRentalPrice(rentalprice);
	}

	private double minimumRentalPrice(int age) {
		double rentalprice = age;
		return rentalprice;
	}

	private double adaptMaxRentalPrice(double rentalprice) {
		if (rentalprice > 1000) {
			return 1000.00;
		}
		return rentalprice;
	}

	double adaptPriceByCausedAccidents(int age, boolean causedAccidents, double rentalprice) {
		if (causedAccidents == true && age < 30) {
			rentalprice += 15;
		}
		return rentalprice;
	}

	private void adaptRentalForHighClassCars(int age, int carClass) {
		if (age <= 21 && carClass > 2) {
			throw new UnsupportedOperationException("Drivers 21 y/o or less can only rent Class 1 vehicles");
		}
	}

	private void rentCarWithFreshLicense(int licence) {
		if (licence < 1) {
			throw new IllegalArgumentException("Driver must hold driving licence at least for one year. Can not rent a car!");
		}
	}

	private double adaptPriceOnClassAgeAndSeason(int age, int carClass, boolean season, double rentalprice) {
		if (carClass >=4 && age <= 25 && season != false) {
			rentalprice = rentalprice * 2;
		}
		return rentalprice;
	}

	private void carRentalForUnderaged(int age) {
		if (age < 18) {
			throw new IllegalArgumentException("Driver too young - cannot quote the price");
		}
	}

	private double adaptPriceDependingOnLicenseAge(int licence, double rentalprice) {
		if (licence < 3) {
			rentalprice = rentalprice * 1.3;
		}
		return rentalprice;
	}
}