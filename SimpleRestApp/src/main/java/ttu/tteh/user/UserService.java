package ttu.tteh.user;

import lombok.Getter;
import lombok.Setter;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;


@Service
public class UserService {
	
	private UserRepository userRepository;

	public UserService(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	User addUser(User user) {
		// here you can do some validations etc before saving the user
		return userRepository.save(user);
	}
	
	void delete(User user) {
		
	}
	
	User addToCart(User user) {
		return userRepository.save(user);
	}
	
	User getToodeById(long toodeId) {
		return userRepository.findOne(toodeId);
	}
	
	
	List<User> getAllUsers() {
		return userRepository.findAll();
	}

	User getUserById(long userId) {
		return userRepository.findOne(userId);
	}
}
