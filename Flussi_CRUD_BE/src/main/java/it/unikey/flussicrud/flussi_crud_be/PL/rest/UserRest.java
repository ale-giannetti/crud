package it.unikey.flussicrud.flussi_crud_be.PL.rest;

import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
public class UserRest {

    private Integer id;
    private String name;
    private String surname;
}
