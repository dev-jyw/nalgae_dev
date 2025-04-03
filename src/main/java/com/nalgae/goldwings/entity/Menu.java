package com.nalgae.goldwings.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "TB_MENU_M")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Menu {

    @Id
    @Column(name = "MENU_SEQ")
    private Long menuSeq;

    @Column(name = "MENU_ID")
    private String menuId;

    @Column(name = "MENU_NM")
    private String menuNm;

    @Column(name = "MENU_LEVEL")
    private Integer menuLevel;

    @Column(name = "MENU_ICON")
    private String menuIcon;

    @Column(name = "PARENT_MENU_ID")
    private String parentMenuId;

    @Column(name = "PGM_YN")
    private String pgmYn;

    @Column(name = "USE_YN")
    private String useYn;

    @Column(name = "EXEC_URL")
    private String execUrl;

    @Column(name = "EXEC_TYPE")
    private String execType;

    @Column(name = "MENU_PARAM")
    private String menuParam;

    @Column(name = "MENU_ORD")
    private Integer menuOrd;

    @Column(name = "USER_TYPE")
    private String userType;

    @Column(name = "INSERT_DT")
    private LocalDateTime insertDt;

    @Column(name = "INSERT_ID")
    private String insertId;

    @Column(name = "UPDATE_DT")
    private LocalDateTime updateDt;

    @Column(name = "UPDATE_ID")
    private String updateId;

    @Column(name = "RUN_TYPE")
    private String runType;

    @Column(name = "LOCK_TYPE")
    private String lockType;

    // @Column(name = "XTYPE")
    // private String xtype;
}
