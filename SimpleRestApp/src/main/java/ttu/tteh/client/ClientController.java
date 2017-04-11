package ttu.tteh.client;

import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ClientController {
	
	private ClientService clientService;

	public ClientController(ClientService clientService) {
		this.clientService = clientService;
	}
	
	@RequestMapping(value="/client/add", method=RequestMethod.POST,
			consumes = "application/json")
	public Client addClient(@RequestBody Client client) {
		return clientService.addClient(client);
	}
	
	@RequestMapping(value="/client", method=RequestMethod.GET)
	public List<Client> getAllClient() {
		return clientService.getAllClient();
	}
	
	@RequestMapping(value = "/client/{id}", method=RequestMethod.GET)
	public Client getClient(@PathVariable("id") long clientId) {
		return clientService.getClientById(clientId);
	}
}
