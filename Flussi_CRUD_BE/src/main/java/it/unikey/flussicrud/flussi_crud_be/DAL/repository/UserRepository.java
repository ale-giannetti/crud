package it.unikey.flussicrud.flussi_crud_be.DAL.repository;

import it.unikey.flussicrud.flussi_crud_be.DAL.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Integer> {
}
