package com.shopping.controller;

import com.shopping.dto.ProductDto;
import com.shopping.dto.StudentDto;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Random;

@RestController
//@CrossOrigin(origins = {"http://localhost:3000", ""})
@RequestMapping(value="/thymeleaf/rest")
public class ThymeleafRestController {
//    @GetMapping(value = "/ex01")
//    public String thymeleafExam01(Model model){
//        model.addAttribute("data", "타임 리프 1번 예시입니다");
//        return "thymeleafEx/viewEx01" ;
//    }

    @GetMapping("/hello")
    public List<String> Hello(){
        return Arrays.asList("서버 포트는 8989", "리액트 포트는 3000");
    }

    @GetMapping(value = "/ex01")
    public ProductDto thymeleafExam01(Model model){
        ProductDto bean = new ProductDto() ;
        bean.setDescription("맛있어요");
        bean.setName("사과");
        bean.setPrice(1234);
        bean.setRegDate(LocalDateTime.now());

        return bean ;
    }

    @GetMapping(value = "/ex02")
    public List<ProductDto> thymeleafExam02(){
        List<ProductDto> beanList = new ArrayList<ProductDto>();

        String[] names = {"사과", "배", "감", "오렌지"};
        for (int i = 1; i <= names.length ; i++) {
            ProductDto bean = new ProductDto() ;
            if(i%2==0){
                bean.setDescription("맛있어요.");
            }else{
                bean.setDescription("맛이 없어요.");
            }

            bean.setName(names[i-1]);
            bean.setPrice(1000*i);
            bean.setRegDate(LocalDateTime.now());

            beanList.add(bean);
        }
        return beanList ;
    }

    @GetMapping(value = "/ex03")
    public List<StudentDto> thymeleafExam03(){
        List<StudentDto> beanList = new ArrayList<StudentDto>();

        String[] ids = {"kim9", "lee", "yusin"};
        String[] names = {"김구", "이순신", "김유신"};
        int[][] jumsu = {{10, 60, 80}, {30, 40, 70}, {20, 90, 50}};
        for (int i = 1; i <= names.length ; i++) {
            StudentDto bean = new StudentDto(ids[i-1], names[i-1], jumsu[i-1][0], jumsu[i-1][1], jumsu[i-1][2]);
            beanList.add(bean);
        }
        return beanList ;
    }

    @GetMapping(value = "/ex04")
    public List<StudentDto> thymeleafExam04(){
        List<StudentDto> beanList = new ArrayList<StudentDto>();

        String[] names = {"김구", "이순신", "김유신", "안중근", "계백", "황진이"};
        int[] kor = {10, 60, 80, 30, 40, 70};
        for (int i = 1; i <= names.length ; i++) {
            StudentDto bean = new StudentDto(""+ i, names[i-1], kor[i-1], kor[names.length-i] + 5, 0);
            beanList.add(bean);
        }
        return beanList ;
    }

    @GetMapping(value = "/ex05")
    public List<StudentDto> thymeleafExam05(){
        List<StudentDto> beanList = new ArrayList<StudentDto>();
        Random rand = new Random() ;
        for (int i = 1; i <= 1000 ; i++) {
            StudentDto bean = new StudentDto(null, null, rand.nextInt(1000), rand.nextInt(1000), 0);
            beanList.add(bean);
        }
        return beanList ;
    }

    @GetMapping(value = "/ex06")
    public String thymeleafExam06(){
        return "thymeleafEx/viewEx06" ;
    }

    @GetMapping(value = "/ex07") // viewEx06.html에서 클릭을 하시면 됩니다.
    public String thymeleafExam07(String param1, String param2, Model model){
        if(param1 == null){param1="호호호";}
        if(param2 == null){param2="크크크";}

        model.addAttribute("param1", param1);
        model.addAttribute("param2", param2);

        return "thymeleafEx/viewEx07" ;
    }

    @GetMapping(value = "/ex08")
    public String thymeleafExam08(){
        return "thymeleafEx/viewEx08" ;
    }
}
