package ttu.tteh.client;

import lombok.Getter;
import lombok.Setter;


import java.util.List;

import org.springframework.stereotype.Service;


@Service
public class ClientService {
	
	private ClientRepository clientRepository;

	public ClientService(ClientRepository clientRepository) {
		this.clientRepository = clientRepository;
	}

	Client addClient(Client client) {
		// here you can do some validations etc before saving the user
		return clientRepository.save(client);
	}
	

	List<Client> getAllClient() {
		return clientRepository.findAll();
	}

	Client getClientById(long clientId) {
		return clientRepository.findOne(clientId);
	}
}
