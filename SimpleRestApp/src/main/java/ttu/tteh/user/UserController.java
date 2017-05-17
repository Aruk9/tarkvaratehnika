package ttu.tteh.user;

import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
	
	private UserService userService;

	public UserController(UserService userService) {
		this.userService = userService;
	}
	
	@RequestMapping(value = "/toode/{id}", method=RequestMethod.GET)
	public User getToode(@PathVariable("id") long toodeId) {
		return userService.getToodeById(toodeId);
	}
	
	
	@RequestMapping(value="/users/add", method=RequestMethod.POST,
			consumes = "application/json")
	public User addUser(@RequestBody User user) {
		return userService.addUser(user);
	}
	
	@RequestMapping(value="/users/delete/{id}", method=RequestMethod.DELETE)
	public void delete(User user) {
		
	}
	
	
	
	@RequestMapping(value="/cart/add", method=RequestMethod.PUT,
			consumes = "application/json")
	public User addToCart(@RequestBody User user) {
		return userService.addToCart(user);
	}
	
	@RequestMapping(value="/users", method=RequestMethod.GET)
	public List<User> getAllUsers() {
		return userService.getAllUsers();
	}
	
	@RequestMapping(value = "/users/{id}", method=RequestMethod.GET)
	public User getUser(@PathVariable("id") long userId) {
		return userService.getUserById(userId);
	}
}
