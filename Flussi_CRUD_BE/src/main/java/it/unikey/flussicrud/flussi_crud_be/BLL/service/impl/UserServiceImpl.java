package it.unikey.flussicrud.flussi_crud_be.BLL.service.impl;

import it.unikey.flussicrud.flussi_crud_be.BLL.dto.UserDto;
import it.unikey.flussicrud.flussi_crud_be.BLL.exception.NotFoundException;
import it.unikey.flussicrud.flussi_crud_be.BLL.mapper.UserMapper;
import it.unikey.flussicrud.flussi_crud_be.BLL.service.CrudService;
import it.unikey.flussicrud.flussi_crud_be.DAL.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements CrudService<UserDto> {

    private final UserMapper mapper;
    private final UserRepository repository;



    @Override
    public UserDto insert(UserDto dto) {
        return mapper.userEntityToUserDto((repository.save(mapper.userDtoToUserEntity(dto))));
    }

    @Override
    public UserDto getById(Integer id) throws NotFoundException {
        if (!repository.existsById(id))
            throw new NotFoundException("Not found at id " + id);
        return mapper.userEntityToUserDto(repository.getById(id));
    }

    @Override
    public List<UserDto> getAll() {
        return repository.findAll()
                .stream()
                .map(mapper::userEntityToUserDto)
                .collect(Collectors.toList());
    }

    @Override
    public UserDto update(UserDto dto) throws NotFoundException {
        if (!repository.existsById(dto.getId()))
            throw new NotFoundException("Not found at id " + dto.getId());
        return mapper.userEntityToUserDto(repository.save(mapper.userDtoToUserEntity(dto)));
    }

    @Override
    public void delete(Integer id) throws NotFoundException {
        if(!repository.existsById(id))
            throw new NotFoundException("Not found at id " + id);
        repository.deleteById(id);
    }
}
