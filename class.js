//x is for initial table lol 
class all_calc{
    
    constructor()
    {
        this.i_3up = document.getElementById("i_3u");
    }
    table_a()
    {
        this.a_1up = document.getElementById("a_1u");
        this.a_2up = document.getElementById("a_2u");
        this.a_3up = document.getElementById("a_3u");
        //first value
        this.a_1up.innerHTML = this.i_3up.innerHTML;
        //calculations 
        this.a_2up_ = parseInt(this.a_2up.value);
        this.add = parseInt(this.a_1up.innerHTML) + this.a_2up_;
       
        this.a_3up.innerHTML = this.add;
    }
    table_b()
    {
        this.table_a();
        this.inherit_which_table_b = document.getElementById("table_from_b");
        this.i_w_t_b_v = this.inherit_which_table_b.value;
        //id
        this.b_1up = document.getElementById("b_1u");
        if(this.i_w_t_b_v == "A")
        {
            this.b_1up.innerHTML = this.a_3up.innerHTML;
            this.b_2up = document.getElementById("b_2u");
            this.b_2up_ = this.b_2up.value;
            this.add = parseInt(this.b_1up.innerHTML) + parseInt(this.b_2up_);
            this.b_3up = document.getElementById("b_3u");
          
            this.b_3up.innerHTML = this.add; 
        }
        if(this.i_w_t_b_v == "X")
        {
            this.b_1up.innerHTML = this.i_3up.innerHTML;
            this.b_2up = document.getElementById("b_2u");
            this.b_2up_ = parseInt(this.b_2up.value);
            this.add = parseInt(this.b_1up.innerHTML) + this.b_2up_;
            this.b_3up = document.getElementById("b_3u");
            this.b_3up.innerHTML = this.add;
        }
    }
    table_c()
    {
        this.table_b();
        this.inherit_which_table_c = document.getElementById("table_from_c");
        this.i_w_t_c_v = this.inherit_which_table_c.value;
        //id
        this.c_1up = document.getElementById("c_1u");
        if(this.i_w_t_c_v == "A")
        {
            this.c_1up.innerHTML = this.a_3up.innerHTML;
            this.c_2up = document.getElementById("c_2u");
            this.c_2up_ = parseInt(this.c_2up.value);
            this.add = parseInt(this.c_1up.innerHTML) + this.c_2up_;
            this.c_3up = document.getElementById("c_3u");
            this.c_3up.innerHTML = this.add; 
          
        }
        if(this.i_w_t_c_v == "B")
        {
            this.c_1up.innerHTML = this.b_3up.innerHTML;
            this.c_2up = document.getElementById("c_2u");
            this.c_2up_ = parseInt(this.c_2up.value);
            this.add = parseInt(this.c_1up.innerHTML) + this.c_2up_;
            this.c_3up = document.getElementById("c_3u");
      
            this.c_3up.innerHTML = this.add; 
        }
        if(this.i_w_t_c_v == "X")
        {
            this.c_1up.innerHTML = this.i_3up.innerHTML;
            this.c_2up = document.getElementById("c_2u");
            this.c_2up_ = parseInt(this.c_2up.value);
            this.add = parseInt(this.c_1up.innerHTML) + this.c_2up_;
            this.c_3up = document.getElementById("c_3u");
            this.c_3up.innerHTML = this.add;
        }

    }
    table_d()
    {
        this.table_c();
        this.inherit_which_table_d = document.getElementById("table_from_d");
        this.i_w_t_d_v = this.inherit_which_table_d.value;
        //id
        this.d_1up = document.getElementById("d_1u");
        if(this.i_w_t_d_v == "A")
        {
            this.d_1up.innerHTML = this.a_3up.innerHTML;
            this.d_2up = document.getElementById("d_2u");
            this.d_2up_ = parseInt(this.d_2up.value);
            this.add = parseInt(this.d_1up.innerHTML) + this.d_2up_;
            this.d_3up = document.getElementById("d_3u");
            this.d_3up.innerHTML = this.add; 
            
        }
        if(this.i_w_t_d_v == "B")
        {
            this.d_1up.innerHTML = this.b_3up.innerHTML;
            this.d_2up = document.getElementById("d_2u");
            this.d_2up_ = parseInt(this.d_2up.value);
            this.add = parseInt(this.d_1up.innerHTML) + this.d_2up_;
            this.d_3up = document.getElementById("d_3u");
            this.d_3up.innerHTML = this.add; 
        }
        if(this.i_w_t_d_v == "C")
        {
            this.d_1up.innerHTML = this.c_3up.innerHTML;
            this.d_2up = document.getElementById("d_2u");
            this.d_2up_ = parseInt(this.d_2up.value);
            this.add = parseInt(this.d_1up.innerHTML) + this.d_2up_;
            this.d_3up = document.getElementById("d_3u");
            this.d_3up.innerHTML = this.add; 
        }
        if(this.i_w_t_d_v == "X")
        {
            this.d_1up.innerHTML = this.i_3up.innerHTML;
            this.d_2up = document.getElementById("d_2u");
            this.d_2up_ = parseInt(this.d_2up.value);
            this.add = parseInt(this.d_1up.innerHTML) + this.d_2up_;
            this.d_3up = document.getElementById("d_3u");
            this.d_3up.innerHTML = this.add;
        }
    }
    table_e()
    {
        this.table_d();
        this.inherit_which_table_e = document.getElementById("table_from_e");
        this.i_w_t_e_v = this.inherit_which_table_e.value;
        //id
        this.e_1up = document.getElementById("e_1u");
        if(this.i_w_t_e_v == "A")
        {
            this.e_1up.innerHTML = this.a_3up.innerHTML;
            this.e_2up = document.getElementById("e_2u");
            this.e_2up_ = parseInt(this.e_2up.value);
            this.add = parseInt(this.e_1up.innerHTML) + this.e_2up_;
            this.e_3up = document.getElementById("e_3u");
            this.e_3up.innerHTML = this.add; 
            
        }
        if(this.i_w_t_e_v == "B")
        {
            this.e_1up.innerHTML = this.b_3up.innerHTML;
            this.e_2up = document.getElementById("e_2u");
            this.e_2up_ = parseInt(this.e_2up.value);
            this.add = parseInt(this.e_1up.innerHTML) + this.e_2up_;
            this.e_3up = document.getElementById("e_3u");
            this.e_3up.innerHTML = this.add; 
        }
        if(this.i_w_t_e_v == "C")
        {
            this.e_1up.innerHTML = this.c_3up.innerHTML;
            this.e_2up = document.getElementById("e_2u");
            this.e_2up_ = parseInt(this.e_2up.value);
            this.add = parseInt(this.e_1up.innerHTML) + this.e_2up_;
            this.e_3up = document.getElementById("e_3u");
            this.e_3up.innerHTML = this.add; 
        }
        if(this.i_w_t_e_v == "D")
        {
            this.e_1up.innerHTML = this.d_3up.innerHTML;
            this.e_2up = document.getElementById("e_2u");
            this.e_2up_ = parseInt(this.e_2up.value);
            this.add = parseInt(this.e_1up.innerHTML) + this.e_2up_;
            this.e_3up = document.getElementById("e_3u");
            this.e_3up.innerHTML = this.add; 
        }
        if(this.i_w_t_e_v == "X")
        {
            this.e_1up.innerHTML = this.i_3up.innerHTML;
            this.e_2up = document.getElementById("e_2u");
            this.e_2up_ = parseInt(this.e_2up.value);
            this.add = parseInt(this.e_1up.innerHTML) + this.e_2up_;
            this.e_3up = document.getElementById("e_3u");
            this.e_3up.innerHTML = this.add;
        }
    }
    table_f()
    {
        this.table_e();
        this.inherit_which_table_f = document.getElementById("table_from_f");
        this.i_w_t_f_v = this.inherit_which_table_f.value;
        //id
        this.f_1up = document.getElementById("f_1u");
        if(this.i_w_t_f_v == "A")
        {
            this.f_1up.innerHTML = this.a_3up.innerHTML;
            this.f_2up = document.getElementById("f_2u");
            this.f_2up_ = parseInt(this.f_2up.value);
            this.add = parseInt(this.f_1up.innerHTML) + this.f_2up_;
            this.f_3up = document.getElementById("f_3u");
            this.f_3up.innerHTML = this.add; 
            
        }
        if(this.i_w_t_f_v == "B")
        {
            this.f_1up.innerHTML = this.b_3up.innerHTML;
            this.f_2up = document.getElementById("f_2u");
            this.f_2up_ = parseInt(this.f_2up.value);
            this.add = parseInt(this.f_1up.innerHTML) + this.f_2up_;
            this.f_3up = document.getElementById("f_3u");
            this.f_3up.innerHTML = this.add; 
        }
        if(this.i_w_t_f_v == "C")
        {
            this.f_1up.innerHTML = this.c_3up.innerHTML;
            this.f_2up = document.getElementById("f_2u");
            this.f_2up_ = parseInt(this.f_2up.value);
            this.add = parseInt(this.f_1up.innerHTML) + this.f_2up_;
            this.f_3up = document.getElementById("f_3u");
            this.f_3up.innerHTML = this.add; 
        }
        if(this.i_w_t_f_v == "D")
        {
            this.f_1up.innerHTML = this.d_3up.innerHTML;
            this.f_2up = document.getElementById("f_2u");
            this.f_2up_ = parseInt(this.f_2up.value);
            this.add = parseInt(this.f_1up.innerHTML) + this.f_2up_;
            this.f_3up = document.getElementById("f_3u");
            this.f_3up.innerHTML = this.add; 
        }
        if(this.i_w_t_f_v == "E")
        {
            this.f_1up.innerHTML = this.e_3up.innerHTML;
            this.f_2up = document.getElementById("f_2u");
            this.f_2up_ = parseInt(this.f_2up.value);
            this.add = parseInt(this.f_1up.innerHTML) + this.f_2up_;
            this.f_3up = document.getElementById("f_3u");
            this.f_3up.innerHTML = this.add; 
        }
        if(this.i_w_t_f_v == "X")
        {
            this.f_1up.innerHTML = this.i_3up.innerHTML;
            this.f_2up = document.getElementById("f_2u");
            this.f_2up_ = parseInt(this.f_2up.value);
            this.add = parseInt(this.f_1up.innerHTML) + this.f_2up_;
            this.f_3up = document.getElementById("f_3u");
            this.f_3up.innerHTML = this.add;
        }
    }
    table_g()
    {
        this.table_f();
        this.inherit_which_table_g = document.getElementById("table_from_g");
        this.i_w_t_g_v = this.inherit_which_table_g.value;
        //id
        this.g_1up = document.getElementById("g_1u");
        if(this.i_w_t_g_v == "A")
        {
            this.g_1up.innerHTML = this.a_3up.innerHTML;
            this.g_2up = document.getElementById("g_2u");
            this.g_2up_ = parseInt(this.g_2up.value);
            this.add = parseInt(this.g_1up.innerHTML) + this.g_2up_;
            this.g_3up = document.getElementById("g_3u");
            this.g_3up.innerHTML = this.add; 
            
        }
        if(this.i_w_t_g_v == "B")
        {
            this.g_1up.innerHTML = this.b_3up.innerHTML;
            this.g_2up = document.getElementById("g_2u");
            this.g_2up_ = parseInt(this.g_2up.value);
            this.add = parseInt(this.g_1up.innerHTML) + this.g_2up_;
            this.g_3up = document.getElementById("g_3u");
            this.g_3up.innerHTML = this.add; 
        }
        if(this.i_w_t_g_v == "C")
        {
            this.g_1up.innerHTML = this.c_3up.innerHTML;
            this.g_2up = document.getElementById("g_2u");
            this.g_2up_ = parseInt(this.g_2up.value);
            this.add = parseInt(this.g_1up.innerHTML) + this.g_2up_;
            this.g_3up = document.getElementById("g_3u");
            this.g_3up.innerHTML = this.add; 
        }
        if(this.i_w_t_g_v == "D")
        {
            this.g_1up.innerHTML = this.d_3up.innerHTML;
            this.g_2up = document.getElementById("g_2u");
            this.g_2up_ = parseInt(this.g_2up.value);
            this.add = parseInt(this.g_1up.innerHTML) + this.g_2up_;
            this.g_3up = document.getElementById("g_3u");
            this.g_3up.innerHTML = this.add; 
        }
        if(this.i_w_t_g_v == "E")
        {
            this.g_1up.innerHTML = this.e_3up.innerHTML;
            this.g_2up = document.getElementById("g_2u");
            this.g_2up_ = parseInt(this.g_2up.value);
            this.add = parseInt(this.g_1up.innerHTML) + this.g_2up_;
            this.g_3up = document.getElementById("g_3u");
            this.g_3up.innerHTML = this.add; 
        }
        if(this.i_w_t_g_v == "F")
        {
            this.g_1up.innerHTML = this.f_3up.innerHTML;
            this.g_2up = document.getElementById("g_2u");
            this.g_2up_ = parseInt(this.g_2up.value);
            this.add = parseInt(this.g_1up.innerHTML) + this.g_2up_;
            this.g_3up = document.getElementById("g_3u");
            this.g_3up.innerHTML = this.add; 
        }
        if(this.i_w_t_g_v == "X")
        {
            this.g_1up.innerHTML = this.i_3up.innerHTML;
            this.g_2up = document.getElementById("g_2u");
            this.g_2up_ = parseInt(this.g_2up.value);
            this.add = parseInt(this.f_1up.innerHTML) + this.g_2up_;
            this.g_3up = document.getElementById("g_3u");
            this.g_3up.innerHTML = this.add;
        }
    }
    table_h()
    {
        this.table_g();
        this.inherit_which_table_h = document.getElementById("table_from_h");
        this.i_w_t_h_v = this.inherit_which_table_h.value;
        //id
        this.h_1up = document.getElementById("h_1u");
        if(this.i_w_t_h_v == "A")
        {
            this.h_1up.innerHTML = this.a_3up.innerHTML;
            this.h_2up = document.getElementById("h_2u");
            this.h_2up_ = parseInt(this.h_2up.value);
            this.add = parseInt(this.g_1up.innerHTML) + this.h_2up_;
            this.h_3up = document.getElementById("h_3u");
            this.h_3up.innerHTML = this.add; 
            
        }
        if(this.i_w_t_h_v == "B")
        {
            this.h_1up.innerHTML = this.b_3up.innerHTML;
            this.h_2up = document.getElementById("h_2u");
            this.h_2up_ = parseInt(this.h_2up.value);
            this.add = parseInt(this.h_1up.innerHTML) + this.h_2up_;
            this.h_3up = document.getElementById("h_3u");
            this.h_3up.innerHTML = this.add; 
        }
        if(this.i_w_t_h_v == "C")
        {
            this.h_1up.innerHTML = this.c_3up.innerHTML;
            this.h_2up = document.getElementById("h_2u");
            this.h_2up_ = parseInt(this.h_2up.value);
            this.add = parseInt(this.h_1up.innerHTML) + this.h_2up_;
            this.h_3up = document.getElementById("h_3u");
            this.h_3up.innerHTML = this.add; 
        }
        if(this.i_w_t_h_v == "D")
        {
            this.h_1up.innerHTML = this.d_3up.innerHTML;
            this.h_2up = document.getElementById("h_2u");
            this.h_2up_ = parseInt(this.h_2up.value);
            this.add = parseInt(this.h_1up.innerHTML) + this.h_2up_;
            this.h_3up = document.getElementById("h_3u");
            this.h_3up.innerHTML = this.add; 
        }
        if(this.i_w_t_h_v == "E")
        {
            this.h_1up.innerHTML = this.e_3up.innerHTML;
            this.h_2up = document.getElementById("h_2u");
            this.h_2up_ = parseInt(this.h_2up.value);
            this.add = parseInt(this.h_1up.innerHTML) + this.h_2up_;
            this.h_3up = document.getElementById("h_3u");
            this.h_3up.innerHTML = this.add; 
        }
        if(this.i_w_t_h_v == "F")
        {
            this.h_1up.innerHTML = this.h_3up.innerHTML;
            this.h_2up = document.getElementById("h_2u");
            this.h_2up_ = parseInt(this.h_2up.value);
            this.add = parseInt(this.h_1up.innerHTML) + this.h_2up_;
            this.h_3up = document.getElementById("h_3u");
            this.h_3up.innerHTML = this.add; 
        }
        if(this.i_w_t_h_v == "G")
        {
            this.h_1up.innerHTML = this.g_3up.innerHTML;
            this.h_2up = document.getElementById("h_2u");
            this.h_2up_ = parseInt(this.h_2up.value);
            this.add = parseInt(this.h_1up.innerHTML) + this.h_2up_;
            this.h_3up = document.getElementById("h_3u");
            this.h_3up.innerHTML = this.add; 
        }
        if(this.i_w_t_g_v == "X")
        {
            this.h_1up.innerHTML = this.i_3up.innerHTML;
            this.h_2up = document.getElementById("h_2u");
            this.h_2up_ = parseInt(this.h_2up.value);
            this.add = parseInt(this.h_1up.innerHTML) + this.h_2up_;
            this.h_3up = document.getElementById("h_3u");
            this.h_3up.innerHTML = this.add;
        }
    }
    table_i()
    {
        this.table_h();
        this.inherit_which_table_z = document.getElementById("table_from_z");
        this.i_w_t_h_v = this.inherit_which_table_z.value;
        //id
        this.z_1up = document.getElementById("z_1u");
        if(this.i_w_t_z_v == "A")
        {
            this.z_1up.innerHTML = this.a_3up.innerHTML;
            this.z_2up = document.getElementById("z_2u");
            this.z_2up_ = parseInt(this.z_2up.value);
            this.add = parseInt(this.z_1up.innerHTML) + this.z_2up_;
            this.z_3up = document.getElementById("z_3u");
            this.z_3up.innerHTML = this.add; 
            
        }
        if(this.i_w_t_z_v == "B")
        {
            this.z_1up.innerHTML = this.b_3up.innerHTML;
            this.z_2up = document.getElementById("z_2u");
            this.z_2up_ = parseInt(this.z_2up.value);
            this.add = parseInt(this.z_1up.innerHTML) + this.z_2up_;
            this.z_3up = document.getElementById("z_3u");
            this.z_3up.innerHTML = this.add; 
        }
        if(this.i_w_t_h_v == "C")
        {
            this.z_1up.innerHTML = this.c_3up.innerHTML;
            this.z_2up = document.getElementById("z_2u");
            this.z_2up_ = parseInt(this.z_2up.value);
            this.add = parseInt(this.z_1up.innerHTML) + this.z_2up_;
            this.h_3up = document.getElementById("z_3u");
            this.h_3up.innerHTML = this.add; 
        }
        if(this.i_w_t_z_v == "D")
        {
            this.z_1up.innerHTML = this.d_3up.innerHTML;
            this.z_2up = document.getElementById("z_2u");
            this.z_2up_ = parseInt(this.z_2up.value);
            this.add = parseInt(this.z_1up.innerHTML) + this.z_2up_;
            this.z_3up = document.getElementById("z_3u");
            this.z_3up.innerHTML = this.add; 
        }
        if(this.i_w_t_z_v == "E")
        {
            this.z_1up.innerHTML = this.e_3up.innerHTML;
            this.z_2up = document.getElementById("z_2u");
            this.z_2up_ = parseInt(this.z_2up.value);
            this.add = parseInt(this.z_1up.innerHTML) + this.z_2up_;
            this.z_3up = document.getElementById("z_3u");
            this.z_3up.innerHTML = this.add; 
        }
        if(this.i_w_t_z_v == "F")
        {
            this.z_1up.innerHTML = this.z_3up.innerHTML;
            this.z_2up = document.getElementById("z_2u");
            this.z_2up_ = parseInt(this.z_2up.value);
            this.add = parseInt(this.z_1up.innerHTML) + this.z_2up_;
            this.z_3up = document.getElementById("z_3u");
            this.z_3up.innerHTML = this.add; 
        }
        if(this.i_w_t_z_v == "G")
        {
            this.z_1up.innerHTML = this.g_3up.innerHTML;
            this.z_2up = document.getElementById("z_2u");
            this.z_2up_ = parseInt(this.z_2up.value);
            this.add = parseInt(this.z_1up.innerHTML) + this.z_2up_;
            this.z_3up = document.getElementById("z_3u");
            this.z_3up.innerHTML = this.add; 
        }
        if(this.i_w_t_z_v == "H")
        {
            this.z_1up.innerHTML = this.h_3up.innerHTML;
            this.z_2up = document.getElementById("z_2u");
            this.z_2up_ = parseInt(this.z_2up.value);
            this.add = parseInt(this.z_1up.innerHTML) + this.z_2up_;
            this.z_3up = document.getElementById("z_3u");
            this.z_3up.innerHTML = this.add; 
        }
        if(this.i_w_t_z_v == "X")
        {
            this.z_1up.innerHTML = this.i_3up.innerHTML;
            this.z_2up = document.getElementById("z_2u");
            this.z_2up_ = parseInt(this.z_2up.value);
            this.add = parseInt(this.z_1up.innerHTML) + this.z_2up_;
            this.z_3up = document.getElementById("z_3u");
            this.z_3up.innerHTML = this.add;
        }
    }
    table_j()
    {
        this.table_i();
        this.inherit_which_table_j = document.getElementById("table_from_j");
        this.i_w_t_j_v = this.inherit_which_table_j.value;
        //id
        this.j_1up = document.getElementById("j_1u");
        if(this.i_w_t_j_v == "A")
        {
            this.j_1up.innerHTML = this.a_3up.innerHTML;
            this.j_2up = document.getElementById("j_2u");
            this.j_2up_ = parseInt(this.j_2up.value);
            this.add = parseInt(this.j_1up.innerHTML) + this.j_2up_;
            this.j_3up = document.getElementById("j_3u");
            this.j_3up.innerHTML = this.add;
            
        }
        if(this.i_w_t_j_v == "B")
        {
            this.j_1up.innerHTML = this.b_3up.innerHTML;
            this.j_2up = document.getElementById("j_2u");
            this.j_2up_ = parseInt(this.j_2up.value);
            this.add = parseInt(this.j_1up.innerHTML) + this.j_2up_;
            this.j_3up = document.getElementById("j_3u");
            this.j_3up.innerHTML = this.add;
        }
        if(this.i_w_t_j_v == "C")
        {
            this.j_1up.innerHTML = this.c_3up.innerHTML;
            this.j_2up = document.getElementById("j_2u");
            this.j_2up_ = parseInt(this.j_2up.value);
            this.add = parseInt(this.j_1up.innerHTML) + this.j_2up_;
            this.j_3up = document.getElementById("j_3u");
            this.j_3up.innerHTML = this.add;
        }
        if(this.i_w_t_j_v == "D")
        {
            this.j_1up.innerHTML = this.d_3up.innerHTML;
            this.j_2up = document.getElementById("j_2u");
            this.j_2up_ = parseInt(this.j_2up.value);
            this.add = parseInt(this.j_1up.innerHTML) + this.j_2up_;
            this.j_3up = document.getElementById("j_3u");
            this.j_3up.innerHTML = this.add;
        }
        if(this.i_w_t_j_v == "E")
        {
            this.j_1up.innerHTML = this.e_3up.innerHTML;
            this.j_2up = document.getElementById("j_2u");
            this.j_2up_ = parseInt(this.j_2up.value);
            this.add = parseInt(this.j_1up.innerHTML) + this.j_2up_;
            this.j_3up = document.getElementById("j_3u");
            this.j_3up.innerHTML = this.add;
        }
        if(this.i_w_t_j_v == "F")
        {
            this.j_1up.innerHTML = this.j_3up.innerHTML;
            this.j_2up = document.getElementById("j_2u");
            this.j_2up_ = parseInt(this.j_2up.value);
            this.add = parseInt(this.j_1up.innerHTML) + this.j_2up_;
            this.j_3up = document.getElementById("j_3u");
            this.j_3up.innerHTML = this.add;
        }
        if(this.i_w_t_j_v == "G")
        {
            this.j_1up.innerHTML = this.g_3up.innerHTML;
            this.j_2up = document.getElementById("j_2u");
            this.j_2up_ = parseInt(this.j_2up.value);
            this.add = parseInt(this.j_1up.innerHTML) + this.j_2up_;
            this.j_3up = document.getElementById("j_3u");
            this.j_3up.innerHTML = this.add;
        }
        if(this.i_w_t_j_v == "H")
        {
            this.j_1up.innerHTML = this.j_3up.innerHTML;
            this.j_2up = document.getElementById("j_2u");
            this.j_2up_ = parseInt(this.j_2up.value);
            this.add = parseInt(this.j_1up.innerHTML) + this.j_2up_;
            this.j_3up = document.getElementById("j_3u");
            this.j_3up.innerHTML = this.add;
        }
        if(this.i_w_t_j_v == "I")
        {
            this.j_1up.innerHTML = this.z_3up.innerHTML;
            this.j_2up = document.getElementById("j_2u");
            this.j_2up_ = parseInt(this.j_2up.value);
            this.add = parseInt(this.j_1up.innerHTML) + this.j_2up_;
            this.j_3up = document.getElementById("j_3u");
            this.j_3up.innerHTML = this.add;
        }
        if(this.i_w_t_j_v == "X")
        {
            this.j_1up.innerHTML = this.i_3up.innerHTML;
            this.j_2up = document.getElementById("j_2u");
            this.j_2up_ = parseInt(this.j_2up.value);
            this.add = parseInt(this.j_1up.innerHTML) + this.j_2up_;
            this.j_3up = document.getElementById("j_3u");
            this.j_3up.innerHTML = this.add;
        }
    }  
    test(){
        alert("welcome");
    }
}
function calc(){
var v = new all_calc();
v.table_j();
}