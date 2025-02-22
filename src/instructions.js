"use strict";

var t = [];
var t16 = [];
var t32 = [];

t[0x00] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.write_e8_(cpu.add8(cpu.read_write_e8(), cpu.read_g8())); };
t16[0x01] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.write_e16_(cpu.add16(cpu.read_write_e16(), cpu.read_g16())); };
t32[0x01] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.write_e32_(cpu.add32(cpu.read_write_e32(), cpu.read_g32s())); }
t[0x02] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.write_g8(cpu.add8(cpu.read_g8(), cpu.read_e8())); };
t16[0x03] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.write_g16(cpu.add16(cpu.read_g16(), cpu.read_e16())); };
t32[0x03] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.write_g32(cpu.add32(cpu.read_g32s(), cpu.read_e32s())); }
t[0x04] = cpu => { cpu.reg8[reg_al] = cpu.add8(cpu.reg8[reg_al], cpu.read_imm8()); };
t16[0x05] = cpu => { cpu.reg16[reg_ax] = cpu.add16(cpu.reg16[reg_ax], cpu.read_imm16()); };
t32[0x05] = cpu => { cpu.reg32s[reg_eax] = cpu.add32(cpu.reg32s[reg_eax], cpu.read_imm32s()); }

t16[0x06] = cpu => { cpu.push16(cpu.sreg[reg_es]); };
t32[0x06] = cpu => { cpu.push32(cpu.sreg[reg_es]); };
t16[0x07] = cpu => {
    cpu.switch_seg(reg_es, cpu.safe_read16(cpu.get_stack_pointer(0)));
    cpu.stack_reg[cpu.reg_vsp] += 2;
};
t32[0x07] = cpu => {
    cpu.switch_seg(reg_es, cpu.safe_read16(cpu.get_stack_pointer(0)));
    cpu.stack_reg[cpu.reg_vsp] += 4;
};

t[0x08] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.write_e8_(cpu.or8(cpu.read_write_e8(), cpu.read_g8())); };
t16[0x09] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.write_e16_(cpu.or16(cpu.read_write_e16(), cpu.read_g16())); };
t32[0x09] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.write_e32_(cpu.or32(cpu.read_write_e32(), cpu.read_g32s())); }
t[0x0a] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.write_g8(cpu.or8(cpu.read_g8(), cpu.read_e8())); };
t16[0x0b] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.write_g16(cpu.or16(cpu.read_g16(), cpu.read_e16())); };
t32[0x0b] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.write_g32(cpu.or32(cpu.read_g32s(), cpu.read_e32s())); }
t[0x0c] = cpu => { cpu.reg8[reg_al] = cpu.or8(cpu.reg8[reg_al], cpu.read_imm8()); };
t16[0x0d] = cpu => { cpu.reg16[reg_ax] = cpu.or16(cpu.reg16[reg_ax], cpu.read_imm16()); };
t32[0x0d] = cpu => { cpu.reg32s[reg_eax] = cpu.or32(cpu.reg32s[reg_eax], cpu.read_imm32s()); }


t16[0x0E] = cpu => { cpu.push16(cpu.sreg[reg_cs]); };
t32[0x0E] = cpu => { cpu.push32(cpu.sreg[reg_cs]); };
t16[0x0F] = cpu => {
    cpu.table0F_16[cpu.read_imm8()](cpu);
};
t32[0x0F] = cpu => {
    cpu.table0F_32[cpu.read_imm8()](cpu);
};

t[0x10] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.write_e8_(cpu.adc8(cpu.read_write_e8(), cpu.read_g8())); };
t16[0x11] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.write_e16_(cpu.adc16(cpu.read_write_e16(), cpu.read_g16())); };
t32[0x11] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.write_e32_(cpu.adc32(cpu.read_write_e32(), cpu.read_g32s())); }
t[0x12] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.write_g8(cpu.adc8(cpu.read_g8(), cpu.read_e8())); };
t16[0x13] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.write_g16(cpu.adc16(cpu.read_g16(), cpu.read_e16())); };
t32[0x13] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.write_g32(cpu.adc32(cpu.read_g32s(), cpu.read_e32s())); }
t[0x14] = cpu => { cpu.reg8[reg_al] = cpu.adc8(cpu.reg8[reg_al], cpu.read_imm8()); };
t16[0x15] = cpu => { cpu.reg16[reg_ax] = cpu.adc16(cpu.reg16[reg_ax], cpu.read_imm16()); };
t32[0x15] = cpu => { cpu.reg32s[reg_eax] = cpu.adc32(cpu.reg32s[reg_eax], cpu.read_imm32s()); }

t16[0x16] = cpu => { cpu.push16(cpu.sreg[reg_ss]); };
t32[0x16] = cpu => { cpu.push32(cpu.sreg[reg_ss]); };
t16[0x17] = cpu => {
    cpu.switch_seg(reg_ss, cpu.safe_read16(cpu.get_stack_pointer(0)));
    cpu.stack_reg[cpu.reg_vsp] += 2;
    cpu.clear_prefixes();
    cpu.cycle();
};
t32[0x17] = cpu => {
    cpu.switch_seg(reg_ss, cpu.safe_read16(cpu.get_stack_pointer(0)));
    cpu.stack_reg[cpu.reg_vsp] += 4;
    cpu.clear_prefixes();
    cpu.cycle();
};

t[0x18] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.write_e8_(cpu.sbb8(cpu.read_write_e8(), cpu.read_g8())); };
t16[0x19] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.write_e16_(cpu.sbb16(cpu.read_write_e16(), cpu.read_g16())); };
t32[0x19] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.write_e32_(cpu.sbb32(cpu.read_write_e32(), cpu.read_g32s())); }
t[0x1a] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.write_g8(cpu.sbb8(cpu.read_g8(), cpu.read_e8())); };
t16[0x1b] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.write_g16(cpu.sbb16(cpu.read_g16(), cpu.read_e16())); };
t32[0x1b] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.write_g32(cpu.sbb32(cpu.read_g32s(), cpu.read_e32s())); }
t[0x1c] = cpu => { cpu.reg8[reg_al] = cpu.sbb8(cpu.reg8[reg_al], cpu.read_imm8()); };
t16[0x1d] = cpu => { cpu.reg16[reg_ax] = cpu.sbb16(cpu.reg16[reg_ax], cpu.read_imm16()); };
t32[0x1d] = cpu => { cpu.reg32s[reg_eax] = cpu.sbb32(cpu.reg32s[reg_eax], cpu.read_imm32s()); }


t16[0x1E] = cpu => { cpu.push16(cpu.sreg[reg_ds]); };
t32[0x1E] = cpu => { cpu.push32(cpu.sreg[reg_ds]); };
t16[0x1F] = cpu => {
    cpu.switch_seg(reg_ds, cpu.safe_read16(cpu.get_stack_pointer(0)));
    cpu.stack_reg[cpu.reg_vsp] += 2;
};
t32[0x1F] = cpu => {
    cpu.switch_seg(reg_ds, cpu.safe_read16(cpu.get_stack_pointer(0)));
    cpu.stack_reg[cpu.reg_vsp] += 4;
};

t[0x20] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.write_e8_(cpu.and8(cpu.read_write_e8(), cpu.read_g8())); };
t16[0x21] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.write_e16_(cpu.and16(cpu.read_write_e16(), cpu.read_g16())); };
t32[0x21] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.write_e32_(cpu.and32(cpu.read_write_e32(), cpu.read_g32s())); }
t[0x22] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.write_g8(cpu.and8(cpu.read_g8(), cpu.read_e8())); };
t16[0x23] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.write_g16(cpu.and16(cpu.read_g16(), cpu.read_e16())); };
t32[0x23] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.write_g32(cpu.and32(cpu.read_g32s(), cpu.read_e32s())); }
t[0x24] = cpu => { cpu.reg8[reg_al] = cpu.and8(cpu.reg8[reg_al], cpu.read_imm8()); };
t16[0x25] = cpu => { cpu.reg16[reg_ax] = cpu.and16(cpu.reg16[reg_ax], cpu.read_imm16()); };
t32[0x25] = cpu => { cpu.reg32s[reg_eax] = cpu.and32(cpu.reg32s[reg_eax], cpu.read_imm32s()); }


t[0x26] = cpu => { cpu.segment_prefix = reg_es; cpu.do_op(); cpu.segment_prefix = SEG_PREFIX_NONE; };
t[0x27] = cpu => { cpu.bcd_daa(); };

t[0x28] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.write_e8_(cpu.sub8(cpu.read_write_e8(), cpu.read_g8())); };
t16[0x29] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.write_e16_(cpu.sub16(cpu.read_write_e16(), cpu.read_g16())); };
t32[0x29] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.write_e32_(cpu.sub32(cpu.read_write_e32(), cpu.read_g32s())); }
t[0x2a] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.write_g8(cpu.sub8(cpu.read_g8(), cpu.read_e8())); };
t16[0x2b] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.write_g16(cpu.sub16(cpu.read_g16(), cpu.read_e16())); };
t32[0x2b] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.write_g32(cpu.sub32(cpu.read_g32s(), cpu.read_e32s())); }
t[0x2c] = cpu => { cpu.reg8[reg_al] = cpu.sub8(cpu.reg8[reg_al], cpu.read_imm8()); };
t16[0x2d] = cpu => { cpu.reg16[reg_ax] = cpu.sub16(cpu.reg16[reg_ax], cpu.read_imm16()); };
t32[0x2d] = cpu => { cpu.reg32s[reg_eax] = cpu.sub32(cpu.reg32s[reg_eax], cpu.read_imm32s()); }

t[0x2E] = cpu => { cpu.segment_prefix = reg_cs; cpu.do_op(); cpu.segment_prefix = SEG_PREFIX_NONE; };
t[0x2F] = cpu => { cpu.bcd_das(); };

t[0x30] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.write_e8_(cpu.xor8(cpu.read_write_e8(), cpu.read_g8())); };
t16[0x31] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.write_e16_(cpu.xor16(cpu.read_write_e16(), cpu.read_g16())); };
t32[0x31] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.write_e32_(cpu.xor32(cpu.read_write_e32(), cpu.read_g32s())); }
t[0x32] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.write_g8(cpu.xor8(cpu.read_g8(), cpu.read_e8())); };
t16[0x33] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.write_g16(cpu.xor16(cpu.read_g16(), cpu.read_e16())); };
t32[0x33] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.write_g32(cpu.xor32(cpu.read_g32s(), cpu.read_e32s())); }
t[0x34] = cpu => { cpu.reg8[reg_al] = cpu.xor8(cpu.reg8[reg_al], cpu.read_imm8()); };
t16[0x35] = cpu => { cpu.reg16[reg_ax] = cpu.xor16(cpu.reg16[reg_ax], cpu.read_imm16()); };
t32[0x35] = cpu => { cpu.reg32s[reg_eax] = cpu.xor32(cpu.reg32s[reg_eax], cpu.read_imm32s()); }

t[0x36] = cpu => { cpu.segment_prefix = reg_ss; cpu.do_op(); cpu.segment_prefix = SEG_PREFIX_NONE; };
t[0x37] = cpu => { cpu.bcd_aaa(); };

t[0x38] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.cmp8(cpu.read_e8(), cpu.read_g8()); };
t16[0x39] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.cmp16(cpu.read_e16(), cpu.read_g16()); };
t32[0x39] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.cmp32(cpu.read_e32s(), cpu.read_g32s()); }
t[0x3A] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.cmp8(cpu.read_g8(), cpu.read_e8()); };
t16[0x3B] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.cmp16(cpu.read_g16(), cpu.read_e16()); };
t32[0x3B] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.cmp32(cpu.read_g32s(), cpu.read_e32s()); }
t[0x3C] = cpu => { cpu.cmp8(cpu.reg8[reg_al], cpu.read_imm8()); };
t16[0x3D] = cpu => { cpu.cmp16(cpu.reg16[reg_ax], cpu.read_imm16()); };
t32[0x3D] = cpu => { cpu.cmp32(cpu.reg32s[reg_eax], cpu.read_imm32s()); }

t[0x3E] = cpu => { cpu.segment_prefix = reg_ds; cpu.do_op(); cpu.segment_prefix = SEG_PREFIX_NONE; };
t[0x3F] = cpu => { cpu.bcd_aas(); };


t16[0x40] = cpu => { cpu.reg16[reg_ax] = cpu.inc16(cpu.reg16[reg_ax]); };
t32[0x40] = cpu => { cpu.reg32s[reg_eax] = cpu.inc32(cpu.reg32s[reg_eax]); };
t16[0x41] = cpu => { cpu.reg16[reg_cx] = cpu.inc16(cpu.reg16[reg_cx]); };
t32[0x41] = cpu => { cpu.reg32s[reg_ecx] = cpu.inc32(cpu.reg32s[reg_ecx]); };
t16[0x42] = cpu => { cpu.reg16[reg_dx] = cpu.inc16(cpu.reg16[reg_dx]); };
t32[0x42] = cpu => { cpu.reg32s[reg_edx] = cpu.inc32(cpu.reg32s[reg_edx]); };
t16[0x43] = cpu => { cpu.reg16[reg_bx] = cpu.inc16(cpu.reg16[reg_bx]); };
t32[0x43] = cpu => { cpu.reg32s[reg_ebx] = cpu.inc32(cpu.reg32s[reg_ebx]); };
t16[0x44] = cpu => { cpu.reg16[reg_sp] = cpu.inc16(cpu.reg16[reg_sp]); };
t32[0x44] = cpu => { cpu.reg32s[reg_esp] = cpu.inc32(cpu.reg32s[reg_esp]); };
t16[0x45] = cpu => { cpu.reg16[reg_bp] = cpu.inc16(cpu.reg16[reg_bp]); };
t32[0x45] = cpu => { cpu.reg32s[reg_ebp] = cpu.inc32(cpu.reg32s[reg_ebp]); };
t16[0x46] = cpu => { cpu.reg16[reg_si] = cpu.inc16(cpu.reg16[reg_si]); };
t32[0x46] = cpu => { cpu.reg32s[reg_esi] = cpu.inc32(cpu.reg32s[reg_esi]); };
t16[0x47] = cpu => { cpu.reg16[reg_di] = cpu.inc16(cpu.reg16[reg_di]); };
t32[0x47] = cpu => { cpu.reg32s[reg_edi] = cpu.inc32(cpu.reg32s[reg_edi]); };


t16[0x48] = cpu => { cpu.reg16[reg_ax] = cpu.dec16(cpu.reg16[reg_ax]); };
t32[0x48] = cpu => { cpu.reg32s[reg_eax] = cpu.dec32(cpu.reg32s[reg_eax]); };
t16[0x49] = cpu => { cpu.reg16[reg_cx] = cpu.dec16(cpu.reg16[reg_cx]); };
t32[0x49] = cpu => { cpu.reg32s[reg_ecx] = cpu.dec32(cpu.reg32s[reg_ecx]); };
t16[0x4A] = cpu => { cpu.reg16[reg_dx] = cpu.dec16(cpu.reg16[reg_dx]); };
t32[0x4A] = cpu => { cpu.reg32s[reg_edx] = cpu.dec32(cpu.reg32s[reg_edx]); };
t16[0x4B] = cpu => { cpu.reg16[reg_bx] = cpu.dec16(cpu.reg16[reg_bx]); };
t32[0x4B] = cpu => { cpu.reg32s[reg_ebx] = cpu.dec32(cpu.reg32s[reg_ebx]); };
t16[0x4C] = cpu => { cpu.reg16[reg_sp] = cpu.dec16(cpu.reg16[reg_sp]); };
t32[0x4C] = cpu => { cpu.reg32s[reg_esp] = cpu.dec32(cpu.reg32s[reg_esp]); };
t16[0x4D] = cpu => { cpu.reg16[reg_bp] = cpu.dec16(cpu.reg16[reg_bp]); };
t32[0x4D] = cpu => { cpu.reg32s[reg_ebp] = cpu.dec32(cpu.reg32s[reg_ebp]); };
t16[0x4E] = cpu => { cpu.reg16[reg_si] = cpu.dec16(cpu.reg16[reg_si]); };
t32[0x4E] = cpu => { cpu.reg32s[reg_esi] = cpu.dec32(cpu.reg32s[reg_esi]); };
t16[0x4F] = cpu => { cpu.reg16[reg_di] = cpu.dec16(cpu.reg16[reg_di]); };
t32[0x4F] = cpu => { cpu.reg32s[reg_edi] = cpu.dec32(cpu.reg32s[reg_edi]); };


t16[0x50] = cpu => { cpu.push16(cpu.reg16[reg_ax]); };
t32[0x50] = cpu => { cpu.push32(cpu.reg32s[reg_eax]); }
t16[0x51] = cpu => { cpu.push16(cpu.reg16[reg_cx]); };
t32[0x51] = cpu => { cpu.push32(cpu.reg32s[reg_ecx]); }
t16[0x52] = cpu => { cpu.push16(cpu.reg16[reg_dx]); };
t32[0x52] = cpu => { cpu.push32(cpu.reg32s[reg_edx]); }
t16[0x53] = cpu => { cpu.push16(cpu.reg16[reg_bx]); };
t32[0x53] = cpu => { cpu.push32(cpu.reg32s[reg_ebx]); }
t16[0x54] = cpu => { cpu.push16(cpu.reg16[reg_sp]); };
t32[0x54] = cpu => { cpu.push32(cpu.reg32s[reg_esp]); }
t16[0x55] = cpu => { cpu.push16(cpu.reg16[reg_bp]); };
t32[0x55] = cpu => { cpu.push32(cpu.reg32s[reg_ebp]); }
t16[0x56] = cpu => { cpu.push16(cpu.reg16[reg_si]); };
t32[0x56] = cpu => { cpu.push32(cpu.reg32s[reg_esi]); }
t16[0x57] = cpu => { cpu.push16(cpu.reg16[reg_di]); };
t32[0x57] = cpu => { cpu.push32(cpu.reg32s[reg_edi]); }

t16[0x58] = cpu => { cpu.reg16[reg_ax] = cpu.pop16(); };
t32[0x58] = cpu => { cpu.reg32s[reg_eax] = cpu.pop32s(); }
t16[0x59] = cpu => { cpu.reg16[reg_cx] = cpu.pop16(); };
t32[0x59] = cpu => { cpu.reg32s[reg_ecx] = cpu.pop32s(); }
t16[0x5A] = cpu => { cpu.reg16[reg_dx] = cpu.pop16(); };
t32[0x5A] = cpu => { cpu.reg32s[reg_edx] = cpu.pop32s(); }
t16[0x5B] = cpu => { cpu.reg16[reg_bx] = cpu.pop16(); };
t32[0x5B] = cpu => { cpu.reg32s[reg_ebx] = cpu.pop32s(); }
t16[0x5C] = cpu => { cpu.reg16[reg_sp] = cpu.pop16(); };
t32[0x5C] = cpu => { cpu.reg32s[reg_esp] = cpu.pop32s(); }
t16[0x5D] = cpu => { cpu.reg16[reg_bp] = cpu.pop16(); };
t32[0x5D] = cpu => { cpu.reg32s[reg_ebp] = cpu.pop32s(); }
t16[0x5E] = cpu => { cpu.reg16[reg_si] = cpu.pop16(); };
t32[0x5E] = cpu => { cpu.reg32s[reg_esi] = cpu.pop32s(); }
t16[0x5F] = cpu => { cpu.reg16[reg_di] = cpu.pop16(); };
t32[0x5F] = cpu => { cpu.reg32s[reg_edi] = cpu.pop32s(); }


t16[0x60] = cpu => { cpu.pusha16(); };
t32[0x60] = cpu => { cpu.pusha32(); };
t16[0x61] = cpu => { cpu.popa16(); };
t32[0x61] = cpu => { cpu.popa32(); };

t[0x62] = cpu => {
    // bound
    dbg_log("Unimplemented BOUND instruction", LOG_CPU);
};
t[0x63] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    // arpl
    //dbg_log("arpl", LOG_CPU);
    if(cpu.protected_mode && !cpu.vm86_mode())
    {
        cpu.write_e16_(cpu.arpl(cpu.read_write_e16(), cpu.modrm_byte >> 2 & 14));
    }
    else
    {
        dbg_log("arpl #ud", LOG_CPU);
        cpu.trigger_ud();
    }
};

t[0x64] = cpu => { cpu.segment_prefix = reg_fs; cpu.do_op(); cpu.segment_prefix = SEG_PREFIX_NONE; };
t[0x65] = cpu => { cpu.segment_prefix = reg_gs; cpu.do_op(); cpu.segment_prefix = SEG_PREFIX_NONE; };

t16[0x66] = cpu => {
    // Operand-size override prefix
    dbg_assert(cpu.operand_size_32 === cpu.is_32);

    cpu.operand_size_32 = true;

    cpu.table = cpu.table32;
    cpu.do_op();

    cpu.operand_size_32 = cpu.is_32;
    cpu.update_operand_size();
};
t32[0x66] = cpu => {
    dbg_assert(cpu.operand_size_32 === cpu.is_32);
    cpu.operand_size_32 = false;

    cpu.table = cpu.table16;
    cpu.do_op();

    cpu.operand_size_32 = cpu.is_32;
    cpu.update_operand_size();
};

t[0x67] = cpu => {
    // Address-size override prefix
    dbg_assert(cpu.address_size_32 === cpu.is_32);

    cpu.address_size_32 = !cpu.is_32;
    cpu.update_address_size();

    cpu.do_op();

    cpu.address_size_32 = cpu.is_32;
    cpu.update_address_size();
};

t16[0x68] = cpu => { cpu.push16(cpu.read_imm16()); };
t32[0x68] = cpu => { cpu.push32(cpu.read_imm32s()); };

t16[0x69] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    cpu.write_g16(cpu.imul_reg16(cpu.read_e16s(), cpu.read_imm16s()));
};
t32[0x69] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    cpu.write_g32(cpu.imul_reg32(cpu.read_e32s(), cpu.read_imm32s()));
};

t16[0x6A] = cpu => { cpu.push16(cpu.read_imm8s()); };
t32[0x6A] = cpu => { cpu.push32(cpu.read_imm8s()); };

t16[0x6B] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    cpu.write_g16(cpu.imul_reg16(cpu.read_e16s(), cpu.read_imm8s()));
};
t32[0x6B] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    cpu.write_g32(cpu.imul_reg32(cpu.read_e32s(), cpu.read_imm8s()));
};

t[0x6C] = cpu => { insb(cpu); };
t16[0x6D] = cpu => { insw(cpu); };
t32[0x6D] = cpu => { insd(cpu); };
t[0x6E] = cpu => { outsb(cpu); };
t16[0x6F] = cpu => { outsw(cpu); };
t32[0x6F] = cpu => { outsd(cpu); };

t[0x70] = cpu => { cpu.jmpcc8( cpu.test_o()); };
t[0x71] = cpu => { cpu.jmpcc8(!cpu.test_o()); };
t[0x72] = cpu => { cpu.jmpcc8( cpu.test_b()); };
t[0x73] = cpu => { cpu.jmpcc8(!cpu.test_b()); };
t[0x74] = cpu => { cpu.jmpcc8( cpu.test_z()); };
t[0x75] = cpu => { cpu.jmpcc8(!cpu.test_z()); };
t[0x76] = cpu => { cpu.jmpcc8( cpu.test_be()); };
t[0x77] = cpu => { cpu.jmpcc8(!cpu.test_be()); };
t[0x78] = cpu => { cpu.jmpcc8( cpu.test_s()); };
t[0x79] = cpu => { cpu.jmpcc8(!cpu.test_s()); };
t[0x7A] = cpu => { cpu.jmpcc8( cpu.test_p()); };
t[0x7B] = cpu => { cpu.jmpcc8(!cpu.test_p()); };
t[0x7C] = cpu => { cpu.jmpcc8( cpu.test_l()); };
t[0x7D] = cpu => { cpu.jmpcc8(!cpu.test_l()); };
t[0x7E] = cpu => { cpu.jmpcc8( cpu.test_le()); };
t[0x7F] = cpu => { cpu.jmpcc8(!cpu.test_le()); };

t[0x80] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    switch(cpu.modrm_byte >> 3 & 7)
    {
        case 0: cpu.write_e8_(cpu.add8(cpu.read_write_e8(), cpu.read_imm8())); break;
        case 1: cpu.write_e8_(cpu. or8(cpu.read_write_e8(), cpu.read_imm8())); break;
        case 2: cpu.write_e8_(cpu.adc8(cpu.read_write_e8(), cpu.read_imm8())); break;
        case 3: cpu.write_e8_(cpu.sbb8(cpu.read_write_e8(), cpu.read_imm8())); break;
        case 4: cpu.write_e8_(cpu.and8(cpu.read_write_e8(), cpu.read_imm8())); break;
        case 5: cpu.write_e8_(cpu.sub8(cpu.read_write_e8(), cpu.read_imm8())); break;
        case 6: cpu.write_e8_(cpu.xor8(cpu.read_write_e8(), cpu.read_imm8())); break;
        case 7: cpu.cmp8(cpu.read_e8(), cpu.read_imm8()); break;
    }
};
t16[0x81] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    switch(cpu.modrm_byte >> 3 & 7)
    {
        case 0: cpu.write_e16_(cpu.add16(cpu.read_write_e16(), cpu.read_imm16())); break;
        case 1: cpu.write_e16_(cpu. or16(cpu.read_write_e16(), cpu.read_imm16())); break;
        case 2: cpu.write_e16_(cpu.adc16(cpu.read_write_e16(), cpu.read_imm16())); break;
        case 3: cpu.write_e16_(cpu.sbb16(cpu.read_write_e16(), cpu.read_imm16())); break;
        case 4: cpu.write_e16_(cpu.and16(cpu.read_write_e16(), cpu.read_imm16())); break;
        case 5: cpu.write_e16_(cpu.sub16(cpu.read_write_e16(), cpu.read_imm16())); break;
        case 6: cpu.write_e16_(cpu.xor16(cpu.read_write_e16(), cpu.read_imm16())); break;
        case 7: cpu.cmp16(cpu.read_e16(), cpu.read_imm16()); break;
    }
};
t32[0x81] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    switch(cpu.modrm_byte >> 3 & 7)
    {
        case 0: cpu.write_e32_(cpu.add32(cpu.read_write_e32(), cpu.read_imm32s())); break;
        case 1: cpu.write_e32_(cpu. or32(cpu.read_write_e32(), cpu.read_imm32s())); break;
        case 2: cpu.write_e32_(cpu.adc32(cpu.read_write_e32(), cpu.read_imm32s())); break;
        case 3: cpu.write_e32_(cpu.sbb32(cpu.read_write_e32(), cpu.read_imm32s())); break;
        case 4: cpu.write_e32_(cpu.and32(cpu.read_write_e32(), cpu.read_imm32s())); break;
        case 5: cpu.write_e32_(cpu.sub32(cpu.read_write_e32(), cpu.read_imm32s())); break;
        case 6: cpu.write_e32_(cpu.xor32(cpu.read_write_e32(), cpu.read_imm32s())); break;
        case 7: cpu.cmp32(cpu.read_e32(), cpu.read_imm32s()); break;
    }
};
t[0x82] = cpu => {
    cpu.table[0x80](cpu); // alias
};
t16[0x83] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    switch(cpu.modrm_byte >> 3 & 7)
    {
        case 0: cpu.write_e16_(cpu.add16(cpu.read_write_e16(), cpu.read_imm8s())); break;
        case 1: cpu.write_e16_(cpu. or16(cpu.read_write_e16(), cpu.read_imm8s())); break;
        case 2: cpu.write_e16_(cpu.adc16(cpu.read_write_e16(), cpu.read_imm8s())); break;
        case 3: cpu.write_e16_(cpu.sbb16(cpu.read_write_e16(), cpu.read_imm8s())); break;
        case 4: cpu.write_e16_(cpu.and16(cpu.read_write_e16(), cpu.read_imm8s())); break;
        case 5: cpu.write_e16_(cpu.sub16(cpu.read_write_e16(), cpu.read_imm8s())); break;
        case 6: cpu.write_e16_(cpu.xor16(cpu.read_write_e16(), cpu.read_imm8s())); break;
        case 7: cpu.cmp16(cpu.read_e16(), cpu.read_imm8s()); break;
    }
};
t32[0x83] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    switch(cpu.modrm_byte >> 3 & 7)
    {
        case 0: cpu.write_e32_(cpu.add32(cpu.read_write_e32(), cpu.read_imm8s())); break;
        case 1: cpu.write_e32_(cpu. or32(cpu.read_write_e32(), cpu.read_imm8s())); break;
        case 2: cpu.write_e32_(cpu.adc32(cpu.read_write_e32(), cpu.read_imm8s())); break;
        case 3: cpu.write_e32_(cpu.sbb32(cpu.read_write_e32(), cpu.read_imm8s())); break;
        case 4: cpu.write_e32_(cpu.and32(cpu.read_write_e32(), cpu.read_imm8s())); break;
        case 5: cpu.write_e32_(cpu.sub32(cpu.read_write_e32(), cpu.read_imm8s())); break;
        case 6: cpu.write_e32_(cpu.xor32(cpu.read_write_e32(), cpu.read_imm8s())); break;
        case 7: cpu.cmp32(cpu.read_e32(), cpu.read_imm8s()); break;
    }
};

t[0x84] = cpu => { cpu.modrm_byte = cpu.read_imm8(); var data = cpu.read_e8(); cpu.test8(data, cpu.read_g8()); };
t16[0x85] = cpu => { cpu.modrm_byte = cpu.read_imm8(); var data = cpu.read_e16(); cpu.test16(data, cpu.read_g16()); };
t32[0x85] = cpu => { cpu.modrm_byte = cpu.read_imm8(); var data = cpu.read_e32s(); cpu.test32(data, cpu.read_g32s()); }


t[0x86] = cpu => { cpu.modrm_byte = cpu.read_imm8(); var data = cpu.read_write_e8(); cpu.write_e8_(cpu.xchg8(data, cpu.modrm_byte)); };
t16[0x87] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    var data = cpu.read_write_e16(); cpu.write_e16_(cpu.xchg16(data, cpu.modrm_byte));
};
t32[0x87] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    var data = cpu.read_write_e32(); cpu.write_e32_(cpu.xchg32(data, cpu.modrm_byte));
};

t[0x88] = cpu => { cpu.modrm_byte = cpu.read_imm8(); var addr = cpu.modrm_resolve(cpu.modrm_byte); cpu.set_e8(addr, cpu.read_g8()); };
t16[0x89] = cpu => { cpu.modrm_byte = cpu.read_imm8(); var addr = cpu.modrm_resolve(cpu.modrm_byte); cpu.set_e16(addr, cpu.read_g16()); };
t32[0x89] = cpu => { cpu.modrm_byte = cpu.read_imm8(); var addr = cpu.modrm_resolve(cpu.modrm_byte); cpu.set_e32(addr, cpu.read_g32s()); }

t[0x8A] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    var data = cpu.read_e8();
    cpu.write_g8(data);
};
t16[0x8B] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    var data = cpu.read_e16();
    cpu.write_g16(data);
};
t32[0x8B] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    var data = cpu.read_e32s();
    cpu.write_g32(data);
};

t16[0x8C] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    var addr = cpu.modrm_resolve(cpu.modrm_byte); cpu.set_e16(addr, cpu.sreg[cpu.modrm_byte >> 3 & 7]);
};
t32[0x8C] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    var addr = cpu.modrm_resolve(cpu.modrm_byte); cpu.set_e32(addr, cpu.sreg[cpu.modrm_byte >> 3 & 7]);
};

t16[0x8D] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    // lea
    if(cpu.modrm_byte >= 0xC0)
    {
        dbg_log("lea #ud", LOG_CPU);
        cpu.trigger_ud();
    }
    var mod = cpu.modrm_byte >> 3 & 7;

    // override prefix, so modrm_resolve does not return the segment part
    cpu.segment_prefix = SEG_PREFIX_ZERO;
    cpu.reg16[mod << 1] = cpu.modrm_resolve(cpu.modrm_byte);
    cpu.segment_prefix = SEG_PREFIX_NONE;
};
t32[0x8D] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    if(cpu.modrm_byte >= 0xC0)
    {
        dbg_log("lea #ud", LOG_CPU);
        cpu.trigger_ud();
    }
    var mod = cpu.modrm_byte >> 3 & 7;

    cpu.segment_prefix = SEG_PREFIX_ZERO;
    cpu.reg32s[mod] = cpu.modrm_resolve(cpu.modrm_byte);
    cpu.segment_prefix = SEG_PREFIX_NONE;
};

t[0x8E] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    var mod = cpu.modrm_byte >> 3 & 7;
    //cpu.paging && console.log(h(cpu.instruction_pointer >>> 0), h(cpu.modrm_byte));

    var data = cpu.read_e16();

    //cpu.paging && console.log(mod, h(data));
    cpu.switch_seg(mod, data);

    if(mod === reg_ss)
    {
        // run next instruction, so no interrupts are handled
        //cpu.clear_prefixes();
        //cpu.cycle();
    }
};

t16[0x8F] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    // pop
    var sp = cpu.safe_read16(cpu.get_stack_pointer(0));

    cpu.stack_reg[cpu.reg_vsp] += 2;

    if(cpu.modrm_byte < 0xC0) {
        var addr = cpu.modrm_resolve(cpu.modrm_byte);
        cpu.stack_reg[cpu.reg_vsp] -= 2;
        cpu.safe_write16(addr, sp);
        cpu.stack_reg[cpu.reg_vsp] += 2;
    } else {
        cpu.write_reg_e16(sp);
    }
};
t32[0x8F] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    var sp = cpu.safe_read32s(cpu.get_stack_pointer(0));

    // change esp first, then resolve modrm address
    cpu.stack_reg[cpu.reg_vsp] += 4;

    if(cpu.modrm_byte < 0xC0) {
        var addr = cpu.modrm_resolve(cpu.modrm_byte);

        // Before attempting a write that might cause a page fault,
        // we must set esp to the old value. Fuck Intel.
        cpu.stack_reg[cpu.reg_vsp] -= 4;
        cpu.safe_write32(addr, sp);
        cpu.stack_reg[cpu.reg_vsp] += 4;
    } else {
        cpu.write_reg_e32(sp);
    }
};

t[0x90] = cpu => { };
t16[0x91] = cpu => { cpu.xchg16r(reg_cx) };
t32[0x91] = cpu => { cpu.xchg32r(reg_ecx) };
t16[0x92] = cpu => { cpu.xchg16r(reg_dx) };
t32[0x92] = cpu => { cpu.xchg32r(reg_edx) };
t16[0x93] = cpu => { cpu.xchg16r(reg_bx) };
t32[0x93] = cpu => { cpu.xchg32r(reg_ebx) };
t16[0x94] = cpu => { cpu.xchg16r(reg_sp) };
t32[0x94] = cpu => { cpu.xchg32r(reg_esp) };
t16[0x95] = cpu => { cpu.xchg16r(reg_bp) };
t32[0x95] = cpu => { cpu.xchg32r(reg_ebp) };
t16[0x96] = cpu => { cpu.xchg16r(reg_si) };
t32[0x96] = cpu => { cpu.xchg32r(reg_esi) };
t16[0x97] = cpu => { cpu.xchg16r(reg_di) };
t32[0x97] = cpu => { cpu.xchg32r(reg_edi) };

t16[0x98] = cpu => { /* cbw */ cpu.reg16[reg_ax] = cpu.reg8s[reg_al]; };
t32[0x98] = cpu => { /* cwde */ cpu.reg32s[reg_eax] = cpu.reg16s[reg_ax]; };
t16[0x99] = cpu => { /* cwd */ cpu.reg16[reg_dx] = cpu.reg16s[reg_ax] >> 15; };
t32[0x99] = cpu => { /* cdq */ cpu.reg32s[reg_edx] = cpu.reg32s[reg_eax] >> 31; };

t16[0x9A] = cpu => {
    // callf

    var new_ip = cpu.read_imm16();
    var new_cs = cpu.read_imm16();

    cpu.writable_or_pagefault(cpu.get_stack_pointer(-4), 4);
    cpu.push16(cpu.sreg[reg_cs]);
    cpu.push16(cpu.get_real_eip());

    cpu.switch_seg(reg_cs, new_cs);
    cpu.instruction_pointer = cpu.get_seg(reg_cs) + new_ip | 0;
};
t32[0x9A] = cpu => {
    var new_ip = cpu.read_imm32s();
    var new_cs = cpu.read_imm16();

    if(!cpu.protected_mode || cpu.vm86_mode())
    {
        if(new_ip & 0xFFFF0000)
        {
            throw cpu.debug.unimpl("#GP handler");
        }
    }

    cpu.writable_or_pagefault(cpu.get_stack_pointer(-8), 8);
    cpu.push32(cpu.sreg[reg_cs]);
    cpu.push32(cpu.get_real_eip());

    cpu.switch_seg(reg_cs, new_cs);
    cpu.instruction_pointer = cpu.get_seg(reg_cs) + new_ip | 0;
};

t[0x9B] = cpu => {
    // fwait: check for pending fpu exceptions
    if((cpu.cr[0] & (CR0_MP | CR0_TS)) === (CR0_MP | CR0_TS))
    {
        // task switched and MP bit is set
        cpu.trigger_nm();
    }
    else
    {
        if(cpu.fpu)
        {
            cpu.fpu.fwait();
        }
        else
        {
            // EM bit isn't checked
            // If there's no FPU, do nothing
        }
    }
};
t16[0x9C] = cpu => {
    // pushf
    if((cpu.flags & flag_vm) && cpu.getiopl() < 3)
    {
        dbg_log("pushf #gp", LOG_CPU);
        cpu.trigger_gp(0);
    }
    else
    {
        cpu.load_eflags();
        cpu.push16(cpu.flags);
    }
};
t32[0x9C] = cpu => {
    // pushf
    if((cpu.flags & flag_vm) && cpu.getiopl() < 3)
    {
        // trap to virtual 8086 monitor
        dbg_log("pushf #gp", LOG_CPU);
        cpu.trigger_gp(0);
    }
    else
    {
        cpu.load_eflags();
        // vm and rf flag are cleared in image stored on the stack
        cpu.push32(cpu.flags & 0x00FCFFFF);
    }
};
t16[0x9D] = cpu => {
    // popf
    if((cpu.flags & flag_vm) && cpu.getiopl() < 3)
    {
        dbg_log("popf #gp", LOG_CPU);
        cpu.trigger_gp(0);
    }

    cpu.update_eflags((cpu.flags & ~0xFFFF) | cpu.pop16());
    cpu.handle_irqs();
};
t32[0x9D] = cpu => {
    // popf
    if(cpu.flags & flag_vm)
    {
        // in vm86 mode, pop causes a #GP when used with the operand-size prefix
        dbg_log("popf #gp", LOG_CPU);
        cpu.trigger_gp(0);
    }

    cpu.update_eflags(cpu.pop32s());
    cpu.handle_irqs();
};
t[0x9E] = cpu => {
    // sahf
    cpu.flags = (cpu.flags & ~0xFF) | cpu.reg8[reg_ah];
    cpu.flags = (cpu.flags & flags_mask) | flags_default;
    cpu.flags_changed = 0;
};
t[0x9F] = cpu => {
    // lahf
    cpu.load_eflags();
    cpu.reg8[reg_ah] = cpu.flags;
};

t[0xA0] = cpu => {
    // mov
    var data = cpu.safe_read8(cpu.read_moffs());
    cpu.reg8[reg_al] = data;
};
t16[0xA1] = cpu => {
    // mov
    var data = cpu.safe_read16(cpu.read_moffs());
    cpu.reg16[reg_ax] = data;
};
t32[0xA1] = cpu => {
    var data = cpu.safe_read32s(cpu.read_moffs());
    cpu.reg32s[reg_eax] = data;
};
t[0xA2] = cpu => {
    // mov
    cpu.safe_write8(cpu.read_moffs(), cpu.reg8[reg_al]);
};
t16[0xA3] = cpu => {
    // mov
    cpu.safe_write16(cpu.read_moffs(), cpu.reg16[reg_ax]);
};
t32[0xA3] = cpu => {
    cpu.safe_write32(cpu.read_moffs(), cpu.reg32s[reg_eax]);
};

t[0xA4] = cpu => { movsb(cpu); };
t16[0xA5] = cpu => { movsw(cpu); };
t32[0xA5] = cpu => { movsd(cpu); };
t[0xA6] = cpu => { cmpsb(cpu); };
t16[0xA7] = cpu => { cmpsw(cpu); };
t32[0xA7] = cpu => { cmpsd(cpu); };

t[0xA8] = cpu => {
    cpu.test8(cpu.reg8[reg_al], cpu.read_imm8());
};
t16[0xA9] = cpu => {
    cpu.test16(cpu.reg16[reg_ax], cpu.read_imm16());
};
t32[0xA9] = cpu => {
    cpu.test32(cpu.reg32s[reg_eax], cpu.read_imm32s());
};

t[0xAA] = cpu => { stosb(cpu); };
t16[0xAB] = cpu => { stosw(cpu); };
t32[0xAB] = cpu => { stosd(cpu); };
t[0xAC] = cpu => { lodsb(cpu); };
t16[0xAD] = cpu => { lodsw(cpu); };
t32[0xAD] = cpu => { lodsd(cpu); };
t[0xAE] = cpu => { scasb(cpu); };
t16[0xAF] = cpu => { scasw(cpu); };
t32[0xAF] = cpu => { scasd(cpu); };


t[0xB0] = cpu => { cpu.reg8[reg_al] = cpu.read_imm8(); };
t[0xB1] = cpu => { cpu.reg8[reg_cl] = cpu.read_imm8(); };
t[0xB2] = cpu => { cpu.reg8[reg_dl] = cpu.read_imm8(); };
t[0xB3] = cpu => { cpu.reg8[reg_bl] = cpu.read_imm8(); };
t[0xB4] = cpu => { cpu.reg8[reg_ah] = cpu.read_imm8(); };
t[0xB5] = cpu => { cpu.reg8[reg_ch] = cpu.read_imm8(); };
t[0xB6] = cpu => { cpu.reg8[reg_dh] = cpu.read_imm8(); };
t[0xB7] = cpu => { cpu.reg8[reg_bh] = cpu.read_imm8(); };

t16[0xB8] = cpu => { cpu.reg16[reg_ax] = cpu.read_imm16(); };
t32[0xB8] = cpu => { cpu.reg32s[reg_eax] = cpu.read_imm32s(); };
t16[0xB9] = cpu => { cpu.reg16[reg_cx] = cpu.read_imm16(); };
t32[0xB9] = cpu => { cpu.reg32s[reg_ecx] = cpu.read_imm32s(); };
t16[0xBA] = cpu => { cpu.reg16[reg_dx] = cpu.read_imm16(); };
t32[0xBA] = cpu => { cpu.reg32s[reg_edx] = cpu.read_imm32s(); };
t16[0xBB] = cpu => { cpu.reg16[reg_bx] = cpu.read_imm16(); };
t32[0xBB] = cpu => { cpu.reg32s[reg_ebx] = cpu.read_imm32s(); };
t16[0xBC] = cpu => { cpu.reg16[reg_sp] = cpu.read_imm16(); };
t32[0xBC] = cpu => { cpu.reg32s[reg_esp] = cpu.read_imm32s(); };
t16[0xBD] = cpu => { cpu.reg16[reg_bp] = cpu.read_imm16(); };
t32[0xBD] = cpu => { cpu.reg32s[reg_ebp] = cpu.read_imm32s(); };
t16[0xBE] = cpu => { cpu.reg16[reg_si] = cpu.read_imm16(); };
t32[0xBE] = cpu => { cpu.reg32s[reg_esi] = cpu.read_imm32s(); };
t16[0xBF] = cpu => { cpu.reg16[reg_di] = cpu.read_imm16(); };
t32[0xBF] = cpu => { cpu.reg32s[reg_edi] = cpu.read_imm32s(); };


t[0xC0] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    var op1 = cpu.read_write_e8();
    var op2 = cpu.read_imm8() & 31;
    var result = 0;
    switch(cpu.modrm_byte >> 3 & 7)
    {
        case 0: result = cpu.rol8(op1, op2); break;
        case 1: result = cpu.ror8(op1, op2); break;
        case 2: result = cpu.rcl8(op1, op2); break;
        case 3: result = cpu.rcr8(op1, op2); break;
        case 4: result = cpu.shl8(op1, op2); break;
        case 5: result = cpu.shr8(op1, op2); break;
        case 6: result = cpu.shl8(op1, op2); break;
        case 7: result = cpu.sar8(op1, op2); break;
    }
    cpu.write_e8_(result);
};
t16[0xC1] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    var op1 = cpu.read_write_e16();
    var op2 = cpu.read_imm8() & 31;
    var result = 0;
    switch(cpu.modrm_byte >> 3 & 7)
    {
        case 0: result = cpu.rol16(op1, op2); break;
        case 1: result = cpu.ror16(op1, op2); break;
        case 2: result = cpu.rcl16(op1, op2); break;
        case 3: result = cpu.rcr16(op1, op2); break;
        case 4: result = cpu.shl16(op1, op2); break;
        case 5: result = cpu.shr16(op1, op2); break;
        case 6: result = cpu.shl16(op1, op2); break;
        case 7: result = cpu.sar16(op1, op2); break;
    }
    cpu.write_e16_(result);
};
t32[0xC1] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    var op1 = cpu.read_write_e32();
    var op2 = cpu.read_imm8() & 31;
    var result = 0;
    switch(cpu.modrm_byte >> 3 & 7)
    {
        case 0: result = cpu.rol32(op1, op2); break;
        case 1: result = cpu.ror32(op1, op2); break;
        case 2: result = cpu.rcl32(op1, op2); break;
        case 3: result = cpu.rcr32(op1, op2); break;
        case 4: result = cpu.shl32(op1, op2); break;
        case 5: result = cpu.shr32(op1, op2); break;
        case 6: result = cpu.shl32(op1, op2); break;
        case 7: result = cpu.sar32(op1, op2); break;
    }
    cpu.write_e32_(result);
};

t16[0xC2] = cpu => {
    // retn
    var imm16 = cpu.read_imm16();

    cpu.instruction_pointer = cpu.get_seg(reg_cs) + cpu.pop16() | 0;
    cpu.stack_reg[cpu.reg_vsp] += imm16;
};
t32[0xC2] = cpu => {
    // retn
    var imm16 = cpu.read_imm16();

    cpu.instruction_pointer = cpu.get_seg(reg_cs) + cpu.pop32s() | 0;
    cpu.stack_reg[cpu.reg_vsp] += imm16;
};
t16[0xC3] = cpu => {
    // retn
    cpu.instruction_pointer = cpu.get_seg(reg_cs) + cpu.pop16() | 0;
};
t32[0xC3] = cpu => {
    // retn
    cpu.instruction_pointer = cpu.get_seg(reg_cs) + cpu.pop32s() | 0;
};

t16[0xC4] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    cpu.lss16(reg_es);
};
t32[0xC4] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    cpu.lss32(reg_es);
};
t16[0xC5] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    cpu.lss16(reg_ds);
};
t32[0xC5] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    cpu.lss32(reg_ds);
};

t[0xC6] = cpu => { cpu.modrm_byte = cpu.read_imm8(); var addr = cpu.modrm_resolve(cpu.modrm_byte); cpu.set_e8(addr, cpu.read_imm8()); };
t16[0xC7] = cpu => { cpu.modrm_byte = cpu.read_imm8(); var addr = cpu.modrm_resolve(cpu.modrm_byte); cpu.set_e16(addr, cpu.read_imm16()); };
t32[0xC7] = cpu => { cpu.modrm_byte = cpu.read_imm8(); var addr = cpu.modrm_resolve(cpu.modrm_byte); cpu.set_e32(addr, cpu.read_imm32s()); }

t16[0xC8] = cpu => { cpu.enter16(cpu.read_imm16(), cpu.read_imm8()); };
t32[0xC8] = cpu => { cpu.enter32(cpu.read_imm16(), cpu.read_imm8()); };
t16[0xC9] = cpu => {
    // leave
    var new_bp = cpu.safe_read16(cpu.get_seg(reg_ss) + cpu.stack_reg[cpu.reg_vbp] | 0);
    cpu.stack_reg[cpu.reg_vsp] = cpu.stack_reg[cpu.reg_vbp] + 2 | 0;
    cpu.reg16[reg_bp] = new_bp;
};
t32[0xC9] = cpu => {
    var new_ebp = cpu.safe_read32s(cpu.get_seg(reg_ss) + cpu.stack_reg[cpu.reg_vbp] | 0);
    cpu.stack_reg[cpu.reg_vsp] = cpu.stack_reg[cpu.reg_vbp] + 4 | 0;
    cpu.reg32s[reg_ebp] = new_ebp;
};
t16[0xCA] = cpu => {
    // retf
    cpu.translate_address_read(cpu.get_seg(reg_ss) + cpu.stack_reg[cpu.reg_vsp] + 4);

    var imm16 = cpu.read_imm16();
    var ip = cpu.pop16();

    cpu.switch_seg(reg_cs, cpu.pop16());
    cpu.instruction_pointer = cpu.get_seg(reg_cs) + ip | 0;

    cpu.stack_reg[cpu.reg_vsp] += imm16;
};
t32[0xCA] = cpu => {
    // retf
    cpu.translate_address_read(cpu.get_seg(reg_ss) + cpu.stack_reg[cpu.reg_vsp] + 8);

    var imm16 = cpu.read_imm16();
    var ip = cpu.pop32s();

    cpu.switch_seg(reg_cs, cpu.pop32s() & 0xFFFF);
    cpu.instruction_pointer = cpu.get_seg(reg_cs) + ip | 0;

    cpu.stack_reg[cpu.reg_vsp] += imm16;
};
t16[0xCB] = cpu => {
    // retf
    cpu.translate_address_read(cpu.get_seg(reg_ss) + cpu.stack_reg[cpu.reg_vsp] + 4);
    var ip = cpu.pop16();

    cpu.switch_seg(reg_cs, cpu.pop16());
    cpu.instruction_pointer = cpu.get_seg(reg_cs) + ip | 0;
};
t32[0xCB] = cpu => {
    // retf
    cpu.translate_address_read(cpu.get_seg(reg_ss) + cpu.stack_reg[cpu.reg_vsp] + 8);
    var ip = cpu.pop32s();

    cpu.switch_seg(reg_cs, cpu.pop32s() & 0xFFFF);
    cpu.instruction_pointer = cpu.get_seg(reg_cs) + ip | 0;
};

t[0xCC] = cpu => {
    // INT3
    cpu.call_interrupt_vector(3, true, false);
};
t[0xCD] = cpu => {
    // INT
    var imm8 = cpu.read_imm8();

    cpu.call_interrupt_vector(imm8, true, false);
};
t[0xCE] = cpu => {
    // INTO
    if(cpu.getof())
    {
        cpu.call_interrupt_vector(4, true, false);
    }
};

t16[0xCF] = cpu => {
    // iret
    cpu.iret16();
};
t32[0xCF] = cpu => {
    cpu.iret32();
};

t[0xD0] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    var op1 = cpu.read_write_e8();
    var result = 0;
    switch(cpu.modrm_byte >> 3 & 7)
    {
        case 0: result = cpu.rol8(op1, 1); break;
        case 1: result = cpu.ror8(op1, 1); break;
        case 2: result = cpu.rcl8(op1, 1); break;
        case 3: result = cpu.rcr8(op1, 1); break;
        case 4: result = cpu.shl8(op1, 1); break;
        case 5: result = cpu.shr8(op1, 1); break;
        case 6: result = cpu.shl8(op1, 1); break;
        case 7: result = cpu.sar8(op1, 1); break;
    }
    cpu.write_e8_(result);
};
t16[0xD1] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    var op1 = cpu.read_write_e16();
    var result = 0;
    switch(cpu.modrm_byte >> 3 & 7)
    {
        case 0: result = cpu.rol16(op1, 1); break;
        case 1: result = cpu.ror16(op1, 1); break;
        case 2: result = cpu.rcl16(op1, 1); break;
        case 3: result = cpu.rcr16(op1, 1); break;
        case 4: result = cpu.shl16(op1, 1); break;
        case 5: result = cpu.shr16(op1, 1); break;
        case 6: result = cpu.shl16(op1, 1); break;
        case 7: result = cpu.sar16(op1, 1); break;
    }
    cpu.write_e16_(result);
};
t32[0xD1] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    var op1 = cpu.read_write_e32();
    var result = 0;
    switch(cpu.modrm_byte >> 3 & 7)
    {
        case 0: result = cpu.rol32(op1, 1); break;
        case 1: result = cpu.ror32(op1, 1); break;
        case 2: result = cpu.rcl32(op1, 1); break;
        case 3: result = cpu.rcr32(op1, 1); break;
        case 4: result = cpu.shl32(op1, 1); break;
        case 5: result = cpu.shr32(op1, 1); break;
        case 6: result = cpu.shl32(op1, 1); break;
        case 7: result = cpu.sar32(op1, 1); break;
    }
    cpu.write_e32_(result);
};

t[0xD2] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    var op1 = cpu.read_write_e8();
    var op2 = cpu.reg8[reg_cl] & 31;
    var result = 0;
    switch(cpu.modrm_byte >> 3 & 7)
    {
        case 0: result = cpu.rol8(op1, op2); break;
        case 1: result = cpu.ror8(op1, op2); break;
        case 2: result = cpu.rcl8(op1, op2); break;
        case 3: result = cpu.rcr8(op1, op2); break;
        case 4: result = cpu.shl8(op1, op2); break;
        case 5: result = cpu.shr8(op1, op2); break;
        case 6: result = cpu.shl8(op1, op2); break;
        case 7: result = cpu.sar8(op1, op2); break;
    }
    cpu.write_e8_(result);
};
t16[0xD3] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    var op1 = cpu.read_write_e16();
    var op2 = cpu.reg8[reg_cl] & 31;
    var result = 0;
    switch(cpu.modrm_byte >> 3 & 7)
    {
        case 0: result = cpu.rol16(op1, op2); break;
        case 1: result = cpu.ror16(op1, op2); break;
        case 2: result = cpu.rcl16(op1, op2); break;
        case 3: result = cpu.rcr16(op1, op2); break;
        case 4: result = cpu.shl16(op1, op2); break;
        case 5: result = cpu.shr16(op1, op2); break;
        case 6: result = cpu.shl16(op1, op2); break;
        case 7: result = cpu.sar16(op1, op2); break;
    }
    cpu.write_e16_(result);
};
t32[0xD3] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    var op1 = cpu.read_write_e32();
    var op2 = cpu.reg8[reg_cl] & 31;
    var result = 0;
    switch(cpu.modrm_byte >> 3 & 7)
    {
        case 0: result = cpu.rol32(op1, op2); break;
        case 1: result = cpu.ror32(op1, op2); break;
        case 2: result = cpu.rcl32(op1, op2); break;
        case 3: result = cpu.rcr32(op1, op2); break;
        case 4: result = cpu.shl32(op1, op2); break;
        case 5: result = cpu.shr32(op1, op2); break;
        case 6: result = cpu.shl32(op1, op2); break;
        case 7: result = cpu.sar32(op1, op2); break;
    }
    cpu.write_e32_(result);
};

t[0xD4] = cpu => {
    cpu.bcd_aam(cpu.read_imm8());
};
t[0xD5] = cpu => {
    cpu.bcd_aad(cpu.read_imm8());
};

t[0xD6] = cpu => {
    // salc
    cpu.reg8[reg_al] = -cpu.getcf();
};
t[0xD7] = cpu => {
    // xlat
    if(cpu.address_size_32)
    {
        cpu.reg8[reg_al] = cpu.safe_read8(cpu.get_seg_prefix(reg_ds) + cpu.reg32s[reg_ebx] + cpu.reg8[reg_al]);
    }
    else
    {
        cpu.reg8[reg_al] = cpu.safe_read8(cpu.get_seg_prefix(reg_ds) + cpu.reg16[reg_bx] + cpu.reg8[reg_al]);
    }
};

t[0xD8] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    cpu.task_switch_test();
    if(cpu.modrm_byte < 0xC0)
        cpu.fpu.op_D8_mem(cpu.modrm_byte, cpu.modrm_resolve(cpu.modrm_byte));
    else
        cpu.fpu.op_D8_reg(cpu.modrm_byte);
};
t[0xD9] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    cpu.task_switch_test();
    if(cpu.modrm_byte < 0xC0)
        cpu.fpu.op_D9_mem(cpu.modrm_byte, cpu.modrm_resolve(cpu.modrm_byte));
    else
        cpu.fpu.op_D9_reg(cpu.modrm_byte);
};
t[0xDA] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    cpu.task_switch_test();
    if(cpu.modrm_byte < 0xC0)
        cpu.fpu.op_DA_mem(cpu.modrm_byte, cpu.modrm_resolve(cpu.modrm_byte));
    else
        cpu.fpu.op_DA_reg(cpu.modrm_byte);
};
t[0xDB] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    cpu.task_switch_test();
    if(cpu.modrm_byte < 0xC0)
        cpu.fpu.op_DB_mem(cpu.modrm_byte, cpu.modrm_resolve(cpu.modrm_byte));
    else
        cpu.fpu.op_DB_reg(cpu.modrm_byte);
};
t[0xDC] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    cpu.task_switch_test();
    if(cpu.modrm_byte < 0xC0)
        cpu.fpu.op_DC_mem(cpu.modrm_byte, cpu.modrm_resolve(cpu.modrm_byte));
    else
        cpu.fpu.op_DC_reg(cpu.modrm_byte);
};
t[0xDD] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    cpu.task_switch_test();
    if(cpu.modrm_byte < 0xC0)
        cpu.fpu.op_DD_mem(cpu.modrm_byte, cpu.modrm_resolve(cpu.modrm_byte));
    else
        cpu.fpu.op_DD_reg(cpu.modrm_byte);
};
t[0xDE] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    cpu.task_switch_test();
    if(cpu.modrm_byte < 0xC0)
        cpu.fpu.op_DE_mem(cpu.modrm_byte, cpu.modrm_resolve(cpu.modrm_byte));
    else
        cpu.fpu.op_DE_reg(cpu.modrm_byte);
};
t[0xDF] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    cpu.task_switch_test();
    if(cpu.modrm_byte < 0xC0)
        cpu.fpu.op_DF_mem(cpu.modrm_byte, cpu.modrm_resolve(cpu.modrm_byte));
    else
        cpu.fpu.op_DF_reg(cpu.modrm_byte);
};

t[0xE0] = cpu => { cpu.loopne(cpu.read_imm8s()); };
t[0xE1] = cpu => { cpu.loope(cpu.read_imm8s()); };
t[0xE2] = cpu => { cpu.loop(cpu.read_imm8s()); };
t[0xE3] = cpu => { cpu.jcxz(cpu.read_imm8s()); };

t[0xE4] = cpu => {
    var port = cpu.read_imm8();
    cpu.test_privileges_for_io(port, 1);
    cpu.reg8[reg_al] = cpu.io.port_read8(port);
};
t16[0xE5] = cpu => {
    var port = cpu.read_imm8();
    cpu.test_privileges_for_io(port, 2);
    cpu.reg16[reg_ax] = cpu.io.port_read16(port);
};
t32[0xE5] = cpu => {
    var port = cpu.read_imm8();
    cpu.test_privileges_for_io(port, 4);
    cpu.reg32s[reg_eax] = cpu.io.port_read32(port);
};
t[0xE6] = cpu => {
    var port = cpu.read_imm8();
    cpu.test_privileges_for_io(port, 1);
    cpu.io.port_write8(port, cpu.reg8[reg_al]);
};
t16[0xE7] = cpu => {
    var port = cpu.read_imm8();
    cpu.test_privileges_for_io(port, 2);
    cpu.io.port_write16(port, cpu.reg16[reg_ax]);
};
t32[0xE7] = cpu => {
    var port = cpu.read_imm8();
    cpu.test_privileges_for_io(port, 4);
    cpu.io.port_write32(port, cpu.reg32s[reg_eax]);
};

t16[0xE8] = cpu => {
    // call
    var imm16s = cpu.read_imm16s();
    cpu.push16(cpu.get_real_eip());

    cpu.jmp_rel16(imm16s);
};
t32[0xE8] = cpu => {
    // call
    var imm32s = cpu.read_imm32s();
    cpu.push32(cpu.get_real_eip());

    cpu.instruction_pointer = cpu.instruction_pointer + imm32s | 0;
};
t16[0xE9] = cpu => {
    // jmp
    var imm16s = cpu.read_imm16s();
    cpu.jmp_rel16(imm16s);
};
t32[0xE9] = cpu => {
    // jmp
    var imm32s = cpu.read_imm32s();
    cpu.instruction_pointer = cpu.instruction_pointer + imm32s | 0;
};
t16[0xEA] = cpu => {
    // jmpf
    var ip = cpu.read_imm16();
    cpu.switch_seg(reg_cs, cpu.read_imm16());

    cpu.instruction_pointer = ip + cpu.get_seg(reg_cs) | 0;
};
t32[0xEA] = cpu => {
    // jmpf
    var ip = cpu.read_imm32s();
    cpu.switch_seg(reg_cs, cpu.read_imm16());

    cpu.instruction_pointer = ip + cpu.get_seg(reg_cs) | 0;
};
t[0xEB] = cpu => {
    // jmp near
    var imm8 = cpu.read_imm8s();
    cpu.instruction_pointer = cpu.instruction_pointer + imm8 | 0;
};

t[0xEC] = cpu => {
    var port = cpu.reg16[reg_dx];
    cpu.test_privileges_for_io(port, 1);
    cpu.reg8[reg_al] = cpu.io.port_read8(port);
};
t16[0xED] = cpu => {
    var port = cpu.reg16[reg_dx];
    cpu.test_privileges_for_io(port, 2);
    cpu.reg16[reg_ax] = cpu.io.port_read16(port);
};
t32[0xED] = cpu => {
    var port = cpu.reg16[reg_dx];
    cpu.test_privileges_for_io(port, 4);
    cpu.reg32s[reg_eax] = cpu.io.port_read32(port);
};
t[0xEE] = cpu => {
    var port = cpu.reg16[reg_dx];
    cpu.test_privileges_for_io(port, 1);
    cpu.io.port_write8(port, cpu.reg8[reg_al]);
};
t16[0xEF] = cpu => {
    var port = cpu.reg16[reg_dx];
    cpu.test_privileges_for_io(port, 2);
    cpu.io.port_write16(port, cpu.reg16[reg_ax]);
};
t32[0xEF] = cpu => {
    var port = cpu.reg16[reg_dx];
    cpu.test_privileges_for_io(port, 4);
    cpu.io.port_write32(port, cpu.reg32s[reg_eax]);
};

t[0xF0] = cpu => {
    // lock

    // TODO
    // This triggers UD when used with
    // some instructions that don't write to memory
    cpu.do_op();
};
t[0xF1] = cpu => {
    // INT1
    // https://code.google.com/p/corkami/wiki/x86oddities#IceBP
    throw cpu.debug.unimpl("int1 instruction");
};

t[0xF2] = cpu => {
    // repnz
    dbg_assert(cpu.repeat_string_prefix === REPEAT_STRING_PREFIX_NONE);
    cpu.repeat_string_prefix = REPEAT_STRING_PREFIX_NZ;
    cpu.do_op();
    cpu.repeat_string_prefix = REPEAT_STRING_PREFIX_NONE;
};
t[0xF3] = cpu => {
    // repz
    dbg_assert(cpu.repeat_string_prefix === REPEAT_STRING_PREFIX_NONE);
    cpu.repeat_string_prefix = REPEAT_STRING_PREFIX_Z;
    cpu.do_op();
    cpu.repeat_string_prefix = REPEAT_STRING_PREFIX_NONE;
};

t[0xF4] = cpu => {
    cpu.hlt_op();
};

t[0xF5] = cpu => {
    // cmc
    cpu.flags = (cpu.flags | 1) ^ cpu.getcf();
    cpu.flags_changed &= ~1;
};

t[0xF6] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    switch(cpu.modrm_byte >> 3 & 7)
    {
        case 0:
            var data = cpu.read_e8(); cpu.test8(data, cpu.read_imm8());
            break;
        case 1:
            var data = cpu.read_e8(); cpu.test8(data, cpu.read_imm8());
            break;
        case 2:
            var data = cpu.read_write_e8(); cpu.write_e8_(~(data));
            break;
        case 3:
            var data = cpu.read_write_e8(); cpu.write_e8_(cpu.neg8(data));
            break;
        case 4:
            var data = cpu.read_e8(); cpu.mul8(data);
            break;
        case 5:
            var data = cpu.read_e8s(); cpu.imul8(data);
            break;
        case 6:
            var data = cpu.read_e8(); cpu.div8(data);
            break;
        case 7:
            var data = cpu.read_e8s(); cpu.idiv8(data);
            break;
    }
};

t16[0xF7] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    switch(cpu.modrm_byte >> 3 & 7)
    {
        case 0:
            var data = cpu.read_e16(); cpu.test16(data, cpu.read_imm16());
            break;
        case 1:
            var data = cpu.read_e16(); cpu.test16(data, cpu.read_imm16());
            break;
        case 2:
            var data = cpu.read_write_e16(); cpu.write_e16_(~(data));
            break;
        case 3:
            var data = cpu.read_write_e16(); cpu.write_e16_(cpu.neg16(data));
            break;
        case 4:
            var data = cpu.read_e16(); cpu.mul16(data);
            break;
        case 5:
            var data = cpu.read_e16s(); cpu.imul16(data);
            break;
        case 6:
            var data = cpu.read_e16(); cpu.div16(data);
            break;
        case 7:
            var data = cpu.read_e16s(); cpu.idiv16(data);
            break;
    }
};
t32[0xF7] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    switch(cpu.modrm_byte >> 3 & 7)
    {
        case 0:
            var data = cpu.read_e32s(); cpu.test32(data, cpu.read_imm32s());
            break;
        case 1:
            var data = cpu.read_e32s(); cpu.test32(data, cpu.read_imm32s());
            break;
        case 2:
            var data = cpu.read_write_e32(); cpu.write_e32_(~(data));
            break;
        case 3:
            var data = cpu.read_write_e32(); cpu.write_e32_(cpu.neg32(data));
            break;
        case 4:
            var data = cpu.read_e32(); cpu.mul32(data);
            break;
        case 5:
            var data = cpu.read_e32s(); cpu.imul32(data);
            break;
        case 6:
            var data = cpu.read_e32(); cpu.div32(data);
            break;
        case 7:
            var data = cpu.read_e32s(); cpu.idiv32(data);
            break;
    }
};

t[0xF8] = cpu => {
    // clc
    cpu.flags &= ~flag_carry;
    cpu.flags_changed &= ~1;
};
t[0xF9] = cpu => {
    // stc
    cpu.flags |= flag_carry;
    cpu.flags_changed &= ~1;
};

t[0xFA] = cpu => {
    // cli
    //dbg_log("interrupts off");

    if(!cpu.protected_mode || ((cpu.flags & flag_vm) ?
            cpu.getiopl() === 3 : cpu.getiopl() >= cpu.cpl))
    {
        cpu.flags &= ~flag_interrupt;
    }
    else
    {
        //if(cpu.getiopl() < 3 && ((cpu.flags & flag_vm) ?
        //    (cpu.cr[4] & CR4_VME) :
        //    (cpu.cpl === 3 && (cpu.cr[4] & CR4_PVI))))
        //{
        //    cpu.flags &= ~flag_vif;
        //}
        //else
        {
            dbg_log("cli #gp", LOG_CPU);
            cpu.trigger_gp(0);
        }
    }
};
t[0xFB] = cpu => {
    // sti
    //dbg_log("interrupts on");

    if(!cpu.protected_mode || ((cpu.flags & flag_vm) ?
            cpu.getiopl() === 3 : cpu.getiopl() >= cpu.cpl))
    {
        cpu.flags |= flag_interrupt;

        cpu.clear_prefixes();
        cpu.cycle();

        cpu.handle_irqs();
    }
    else
    {
        //if(cpu.getiopl() < 3 && (cpu.flags & flag_vip) === 0 && ((cpu.flags & flag_vm) ?
        //    (cpu.cr[4] & CR4_VME) :
        //    (cpu.cpl === 3 && (cpu.cr[4] & CR4_PVI))))
        //{
        //    cpu.flags |= flag_vif;
        //}
        //else
        {
            dbg_log("sti #gp", LOG_CPU);
            cpu.trigger_gp(0);
        }
    }

};

t[0xFC] = cpu => {
    // cld
    cpu.flags &= ~flag_direction;
};
t[0xFD] = cpu => {
    // std
    cpu.flags |= flag_direction;
};

t[0xFE] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    var mod = cpu.modrm_byte & 56;

    if(mod === 0)
    {
        var data = cpu.read_write_e8(); cpu.write_e8_(cpu.inc8(data));
    }
    else if(mod === 8)
    {
        var data = cpu.read_write_e8(); cpu.write_e8_(cpu.dec8(data));
    }
    else
    {
        cpu.todo();
    }
};
t16[0xFF] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    switch(cpu.modrm_byte >> 3 & 7)
    {
        case 0:
            var data = cpu.read_write_e16(); cpu.write_e16_(cpu.inc16(data));
            break;
        case 1:
            var data = cpu.read_write_e16(); cpu.write_e16_(cpu.dec16(data));
            break;
        case 2:
            // 2, call near
            var data = cpu.read_e16();
            cpu.push16(cpu.get_real_eip());
            cpu.instruction_pointer = cpu.get_seg(reg_cs) + data | 0;
            break;
        case 3:
            // 3, callf
            if(cpu.modrm_byte >= 0xC0)
            {
                dbg_log("callf #ud", LOG_CPU);
                cpu.trigger_ud();
                dbg_assert(false, "unreachable");
            }

            var virt_addr = cpu.modrm_resolve(cpu.modrm_byte);
            var new_cs = cpu.safe_read16(virt_addr + 2);
            var new_ip = cpu.safe_read16(virt_addr);

            cpu.writable_or_pagefault(cpu.get_stack_pointer(-4), 4);
            cpu.push16(cpu.sreg[reg_cs]);
            cpu.push16(cpu.get_real_eip());

            cpu.switch_seg(reg_cs, new_cs);
            cpu.instruction_pointer = cpu.get_seg(reg_cs) + new_ip | 0;
            break;
        case 4:
            // 4, jmp near
            var data = cpu.read_e16();
            cpu.instruction_pointer = cpu.get_seg(reg_cs) + data | 0;
            break;
        case 5:
            // 5, jmpf
            if(cpu.modrm_byte >= 0xC0)
            {
                dbg_log("jmpf #ud", LOG_CPU);
                cpu.trigger_ud();
                dbg_assert(false, "unreachable");
            }

            var virt_addr = cpu.modrm_resolve(cpu.modrm_byte);
            var new_cs = cpu.safe_read16(virt_addr + 2);
            var new_ip = cpu.safe_read16(virt_addr);

            cpu.switch_seg(reg_cs, new_cs);
            cpu.instruction_pointer = cpu.get_seg(reg_cs) + new_ip | 0;
            break;
        case 6:
            // 6, push
            var data = cpu.read_e16();
            cpu.push16(data);
            break;
        case 7:
            cpu.todo();
    }
};
t32[0xFF] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    switch(cpu.modrm_byte >> 3 & 7)
    {
        case 0:
            var data = cpu.read_write_e32(); cpu.write_e32_(cpu.inc32(data));
            break;
        case 1:
            var data = cpu.read_write_e32(); cpu.write_e32_(cpu.dec32(data));
            break;
        case 2:
            // 2, call near
            var data = cpu.read_e32s();
            cpu.push32(cpu.get_real_eip());

            cpu.instruction_pointer = cpu.get_seg(reg_cs) + data | 0;
            break;
        case 3:
            // 3, callf
            if(cpu.modrm_byte >= 0xC0)
            {
                dbg_log("callf #ud", LOG_CPU);
                cpu.trigger_ud();
                dbg_assert(false, "unreachable");
            }

            var virt_addr = cpu.modrm_resolve(cpu.modrm_byte);
            var new_cs = cpu.safe_read16(virt_addr + 4);
            var new_ip = cpu.safe_read32s(virt_addr);

            cpu.writable_or_pagefault(cpu.get_stack_pointer(-8), 8);
            cpu.push32(cpu.sreg[reg_cs]);
            cpu.push32(cpu.get_real_eip());

            cpu.switch_seg(reg_cs, new_cs);
            cpu.instruction_pointer = cpu.get_seg(reg_cs) + new_ip | 0;
            break;
        case 4:
            // 4, jmp near
            var data = cpu.read_e32s();
            cpu.instruction_pointer = cpu.get_seg(reg_cs) + data | 0;
            break;
        case 5:
            // 5, jmpf
            if(cpu.modrm_byte >= 0xC0)
            {
                dbg_log("jmpf #ud", LOG_CPU);
                cpu.trigger_ud();
                dbg_assert(false, "unreachable");
            }

            var virt_addr = cpu.modrm_resolve(cpu.modrm_byte);
            var new_cs = cpu.safe_read16(virt_addr + 4);
            var new_ip = cpu.safe_read32s(virt_addr);

            cpu.switch_seg(reg_cs, new_cs);
            cpu.instruction_pointer = cpu.get_seg(reg_cs) + new_ip | 0;
            break;
        case 6:
            // push
            var data = cpu.read_e32s();
            cpu.push32(data);
            break;
        case 7:
            cpu.todo();
    }
};

var table16 = [];
var table32 = [];
CPU.prototype.table16 = table16;
CPU.prototype.table32 = table32;

for(var i = 0; i < 256; i++)
{
    if(t[i])
    {
        //dbg_assert(!t16[i]);
        //dbg_assert(!t32[i]);
        table16[i] = table32[i] = t[i];
    }
    else if(t16[i])
    {
        //dbg_assert(!t[i]);
        //dbg_assert(t32[i]);
        table16[i] = t16[i];
        table32[i] = t32[i];
    }
}

t = [];
t16 = [];
t32 = [];

// 0F ops start here
//#define table16 table0F_16
//#define table32 table0F_32

t[0x00] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    if(!cpu.protected_mode || cpu.vm86_mode())
    {
        // No GP, UD is correct here
        dbg_log("0f 00 #ud", LOG_CPU);
        cpu.trigger_ud();
    }

    switch(cpu.modrm_byte >> 3 & 7)
    {
        case 0:
            // sldt
            var addr = cpu.modrm_resolve(cpu.modrm_byte); cpu.set_e16(addr, cpu.sreg[reg_ldtr]);
            if(cpu.modrm_byte >= 0xC0)
            {
                cpu.reg32s[cpu.modrm_byte & 7] &= 0xFFFF;
            }
            break;
        case 1:
            // str
            var addr = cpu.modrm_resolve(cpu.modrm_byte); cpu.set_e16(addr, cpu.sreg[reg_tr]);
            if(cpu.modrm_byte >= 0xC0)
            {
                cpu.reg32s[cpu.modrm_byte & 7] &= 0xFFFF;
            }
            break;
        case 2:
            // lldt
            if(cpu.cpl)
            {
                cpu.trigger_gp(0);
            }

            var data = cpu.read_e16();
            cpu.load_ldt(data);
            break;
        case 3:
            // ltr
            if(cpu.cpl)
            {
                cpu.trigger_gp(0);
            }

            var data = cpu.read_e16();
            cpu.load_tr(data);
            break;
        case 4:
            // verr
            var reg = cpu.read_e16(addr);
            dbg_log("unimplemented: verr  " + h(reg, 4));
            cpu.flags_changed &= ~flag_zero;
            cpu.flags |= flag_zero;
            break;
        case 5:
            // verw
            var reg = cpu.read_e16(addr);
            dbg_log("unimplemented: verw  " + h(reg, 4));
            cpu.flags_changed &= ~flag_zero;
            cpu.flags |= flag_zero;
            break;

        default:
            dbg_log(cpu.modrm_byte >> 3 & 7, LOG_CPU);
            cpu.todo();
    }
};

t[0x01] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    var mod = cpu.modrm_byte >> 3 & 7;

    if(mod === 4)
    {
        // smsw
        var addr = cpu.modrm_resolve(cpu.modrm_byte); cpu.set_e16(addr, cpu.cr[0]);
        return;
    }
    else if(mod === 6)
    {
        // lmsw
        if(cpu.cpl)
        {
            cpu.trigger_gp(0);
        }

        var data = cpu.read_e16();

        var old_cr0 = cpu.cr[0];
        cpu.cr[0] = (cpu.cr[0] & ~0xF) | (data & 0xF);

        if(cpu.protected_mode)
        {
            // lmsw cannot be used to switch back
            cpu.cr[0] |= CR0_PE;
        }

        dbg_log("cr0=" + h(data >>> 0), LOG_CPU);
        cpu.cr0_changed(old_cr0);
        return;
    }

    if(cpu.modrm_byte >= 0xC0)
    {
        // only memory
        dbg_log("0f 01 #ud", LOG_CPU);
        cpu.trigger_ud();
    }

    if((mod === 2 || mod === 3) && cpu.protected_mode)
    {
        // override prefix, so cpu.modrm_resolve does not return the segment part
        // only lgdt and lidt and only in protected mode
        cpu.segment_prefix = SEG_PREFIX_ZERO;
    }

    var addr = cpu.modrm_resolve(cpu.modrm_byte);
    cpu.segment_prefix = SEG_PREFIX_NONE;

    switch(mod)
    {
        case 0:
            // sgdt
            cpu.writable_or_pagefault(addr, 6);
            cpu.safe_write16(addr, cpu.gdtr_size);
            cpu.safe_write32(addr + 2, cpu.gdtr_offset);
            break;
        case 1:
            // sidt
            cpu.writable_or_pagefault(addr, 6);
            cpu.safe_write16(addr, cpu.idtr_size);
            cpu.safe_write32(addr + 2, cpu.idtr_offset);
            break;
        case 2:
            // lgdt
            if(cpu.cpl)
            {
                cpu.trigger_gp(0);
            }

            var size = cpu.safe_read16(addr);
            var offset = cpu.safe_read32s(addr + 2);

            cpu.gdtr_size = size;
            cpu.gdtr_offset = offset;

            if(!cpu.operand_size_32)
            {
                cpu.gdtr_offset &= 0xFFFFFF;
            }

            //dbg_log("gdt at " + h(cpu.gdtr_offset) + ", " + cpu.gdtr_size + " bytes", LOG_CPU);
            //dump_gdt_ldt();
            break;
        case 3:
            // lidt
            if(cpu.cpl)
            {
                cpu.trigger_gp(0);
            }

            var size = cpu.safe_read16(addr);
            var offset = cpu.safe_read32s(addr + 2);

            cpu.idtr_size = size;
            cpu.idtr_offset = offset;

            if(!cpu.operand_size_32)
            {
                cpu.idtr_offset &= 0xFFFFFF;
            }

            //dbg_log("[" + h(cpu.instruction_pointer) + "] idt at " +
            //        h(idtr_offset) + ", " + cpu.idtr_size + " bytes " + h(addr), LOG_CPU);
            break;
        case 7:
            // flush translation lookaside buffer
            if(cpu.cpl)
            {
                cpu.trigger_gp(0);
            }

            cpu.invlpg(addr);
            break;
        default:
            dbg_log(mod);
            cpu.todo();
    }
};

t16[0x02] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    // lar
    dbg_log("lar", LOG_CPU);
    if(!cpu.protected_mode || cpu.vm86_mode())
    {
        dbg_log("lar #ud", LOG_CPU);
        cpu.trigger_ud();
    }
    var data = cpu.read_e16();
    cpu.write_g16(cpu.lar(data, cpu.read_g16()));
};
t32[0x02] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    dbg_log("lar", LOG_CPU);
    if(!cpu.protected_mode || cpu.vm86_mode())
    {
        dbg_log("lar #ud", LOG_CPU);
        cpu.trigger_ud();
    }
    var data = cpu.read_e16();
    cpu.write_g32(cpu.lar(data, cpu.read_g32s()));
};

t16[0x03] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    // lsl
    dbg_log("lsl", LOG_CPU);
    if(!cpu.protected_mode || cpu.vm86_mode())
    {
        dbg_log("lsl #ud", LOG_CPU);
        cpu.trigger_ud();
    }
    var data = cpu.read_e16();
    cpu.write_g16(cpu.lsl(data, cpu.read_g16()));
};
t32[0x03] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    dbg_log("lsl", LOG_CPU);
    if(!cpu.protected_mode || cpu.vm86_mode())
    {
        dbg_log("lsl #ud", LOG_CPU);
        cpu.trigger_ud();
    }
    var data = cpu.read_e16();
    cpu.write_g32(cpu.lsl(data, cpu.read_g32s()));
};

t[0x04] = cpu => { cpu.undefined_instruction(); };
t[0x05] = cpu => { cpu.undefined_instruction(); };

t[0x06] = cpu => {
    // clts
    if(cpu.cpl)
    {
        dbg_log("clts #gp", LOG_CPU);
        cpu.trigger_gp(0);
    }
    else
    {
        //dbg_log("clts", LOG_CPU);
        cpu.cr[0] &= ~CR0_TS;
    }
};

t[0x07] = cpu => { cpu.undefined_instruction(); };
t[0x08] = cpu => {
    // invd
    cpu.todo();
};

t[0x09] = cpu => {
    if(cpu.cpl)
    {
        dbg_log("wbinvd #gp", LOG_CPU);
        cpu.trigger_gp(0);
    }
    // wbinvd
};


t[0x0A] = cpu => { cpu.undefined_instruction(); };
t[0x0B] = cpu => {
    // UD2
    cpu.trigger_ud();
};
t[0x0C] = cpu => { cpu.undefined_instruction(); };

t[0x0D] = cpu => {
    // nop
    cpu.todo();
};

t[0x0E] = cpu => { cpu.undefined_instruction(); };
t[0x0F] = cpu => { cpu.undefined_instruction(); };

t[0x10] = cpu => { cpu.unimplemented_sse(); };
t[0x11] = cpu => { cpu.unimplemented_sse(); };
t[0x12] = cpu => { cpu.unimplemented_sse(); };
t[0x13] = cpu => { cpu.unimplemented_sse(); };
t[0x14] = cpu => { cpu.unimplemented_sse(); };
t[0x15] = cpu => { cpu.unimplemented_sse(); };
t[0x16] = cpu => { cpu.unimplemented_sse(); };
t[0x17] = cpu => { cpu.unimplemented_sse(); };

t[0x18] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    // prefetch
    // nop for us
    if(cpu.modrm_byte < 0xC0)
        cpu.modrm_resolve(cpu.modrm_byte);
};

t[0x19] = cpu => { cpu.unimplemented_sse(); };
t[0x1A] = cpu => { cpu.unimplemented_sse(); };
t[0x1B] = cpu => { cpu.unimplemented_sse(); };
t[0x1C] = cpu => { cpu.unimplemented_sse(); };
t[0x1D] = cpu => { cpu.unimplemented_sse(); };
t[0x1E] = cpu => { cpu.unimplemented_sse(); };
t[0x1F] = cpu => { cpu.unimplemented_sse(); };


t[0x20] = cpu => { cpu.modrm_byte = cpu.read_imm8();

    if(cpu.cpl)
    {
        cpu.trigger_gp(0);
    }
    //dbg_log("cr" + (cpu.modrm_byte >> 3 & 7) + " read", LOG_CPU);

    // mov addr, cr
    // mod = which control register
    switch(cpu.modrm_byte >> 3 & 7)
    {
        case 0:
            cpu.write_reg_e32(cpu.cr[0]);
            break;
        case 2:
            //dbg_log("read cr2 at " + h(cpu.instruction_pointer >>> 0, 8));
            cpu.write_reg_e32(cpu.cr[2]);
            break;
        case 3:
            //dbg_log("read cr3 (" + h(cpu.cr[3], 8) + ")", LOG_CPU);
            cpu.write_reg_e32(cpu.cr[3]);
            break;
        case 4:
            cpu.write_reg_e32(cpu.cr[4]);
            break;
        default:
            dbg_log(cpu.modrm_byte >> 3 & 7);
            cpu.todo();
    }
};

t[0x21] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    if(cpu.cpl)
    {
        cpu.trigger_gp(0);
    }

    // TODO: mov from debug register
    dbg_assert(cpu.modrm_byte >= 0xC0);

    cpu.reg32s[cpu.modrm_byte & 7] = cpu.dreg[cpu.modrm_byte >> 3 & 7];

    //dbg_log("read dr" + (cpu.modrm_byte >> 3 & 7) + ": " + h(cpu.reg32[cpu.modrm_byte & 7]), LOG_CPU);
};

t[0x22] = cpu => { cpu.modrm_byte = cpu.read_imm8();

    if(cpu.cpl)
    {
        cpu.trigger_gp(0);
    }

    var data = cpu.read_reg_e32s();
    //dbg_log("cr" + (cpu.modrm_byte >> 3 & 7) + " written: " + h(data >>> 0, 8), LOG_CPU);

    // mov cr, addr
    // mod = which control register
    switch(cpu.modrm_byte >> 3 & 7)
    {
        case 0:
            var old_cr0 = cpu.cr[0];
            cpu.cr[0] = data;

            if((cpu.cr[0] & (CR0_PE | CR0_PG)) === CR0_PG)
            {
                // cannot load PG without PE
                throw cpu.debug.unimpl("#GP handler");
            }

            cpu.cr0_changed(old_cr0);
            //dbg_log("cr0=" + h(data >>> 0), LOG_CPU);
            break;

        case 2:
            cpu.cr[2] = data;
            //dbg_log("cr2=" + h(data >>> 0), LOG_CPU);
            break;

        case 3:
            //dbg_log("cr3=" + h(data >>> 0), LOG_CPU);
            cpu.cr[3] = data;
            dbg_assert((cpu.cr[3] & 0xFFF) === 0);
            cpu.clear_tlb();

            //dump_page_directory();
            //dbg_log("page directory loaded at " + h(cpu.cr[3] >>> 0, 8), LOG_CPU);
            break;

        case 4:
            if(data & (1 << 11 | 1 << 12 | 1 << 15 | 1 << 16 | 1 << 19 | 0xFFC00000))
            {
                cpu.trigger_gp(0);
            }

            if((cpu.cr[4] ^ data) & CR4_PGE)
            {
                if(data & CR4_PGE)
                {
                    // The PGE bit has been enabled. The global TLB is
                    // still empty, so we only have to copy it over
                    cpu.clear_tlb();
                }
                else
                {
                    // Clear the global TLB
                    cpu.full_clear_tlb();
                }
            }

            cpu.cr[4] = data;
            cpu.page_size_extensions = (cpu.cr[4] & CR4_PSE) ? PSE_ENABLED : 0;

            if(cpu.cr[4] & CR4_PAE)
            {
                throw cpu.debug.unimpl("PAE");
            }

            dbg_log("cr4=" + h(cpu.cr[4] >>> 0), LOG_CPU);
            break;

        default:
            dbg_log(cpu.modrm_byte >> 3 & 7);
            cpu.todo();
    }
};
t[0x23] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    if(cpu.cpl)
    {
        cpu.trigger_gp(0);
    }

    // TODO: mov to debug register
    dbg_assert(cpu.modrm_byte >= 0xC0);
    //dbg_log("write dr" + (cpu.modrm_byte >> 3 & 7) + ": " + h(cpu.reg32[cpu.modrm_byte & 7]), LOG_CPU);

    cpu.dreg[cpu.modrm_byte >> 3 & 7] = cpu.read_reg_e32s();
};

t[0x24] = cpu => { cpu.undefined_instruction(); };
t[0x25] = cpu => { cpu.undefined_instruction(); };
t[0x26] = cpu => { cpu.undefined_instruction(); };
t[0x27] = cpu => { cpu.undefined_instruction(); };

t[0x28] = cpu => { cpu.unimplemented_sse(); };
t[0x29] = cpu => { cpu.unimplemented_sse(); };
t[0x2A] = cpu => { cpu.unimplemented_sse(); };
t[0x2B] = cpu => { cpu.unimplemented_sse(); };
t[0x2C] = cpu => { cpu.unimplemented_sse(); };
t[0x2D] = cpu => { cpu.unimplemented_sse(); };
t[0x2E] = cpu => { cpu.unimplemented_sse(); };
t[0x2F] = cpu => { cpu.unimplemented_sse(); };

// wrmsr
t[0x30] = cpu => {
    // wrmsr - write maschine specific register

    if(cpu.cpl)
    {
        // cpl > 0 or vm86 mode (vm86 mode is always runs with cpl=3)
        cpu.trigger_gp(0);
    }

    var index = cpu.reg32s[reg_ecx];
    var low = cpu.reg32s[reg_eax];
    var high = cpu.reg32s[reg_edx];

    dbg_log("wrmsr ecx=" + h(index >>> 0, 8) +
                " data=" + h(high >>> 0, 8) + ":" + h(low >>> 0, 8), LOG_CPU);

    switch(index)
    {
        case IA32_SYSENTER_CS:
            cpu.sysenter_cs = low & 0xFFFF;
            break;

        case IA32_SYSENTER_EIP:
            cpu.sysenter_eip = low;
            break;

        case IA32_SYSENTER_ESP:
            cpu.sysenter_esp = low;
            break;

        case IA32_APIC_BASE_MSR:
            // changing not supported
            dbg_assert((low >>> 0) === APIC_ADDRESS);
            break;

        case IA32_TIME_STAMP_COUNTER:
            var new_tick = (low >>> 0) + 0x100000000 * (high >>> 0);
            cpu.tsc_offset = v86.microtick() - new_tick / TSC_RATE;
            break;

        case IA32_BIOS_SIGN_ID:
            break;

        case IA32_MISC_ENABLE: // Enable Misc. Processor Features
            break;

        default:
            dbg_assert(false, "Unknown msr: " + h(index >>> 0, 8));
    }
};

t[0x31] = cpu => {
    // rdtsc - read timestamp counter

    if(!cpu.cpl || !(cpu.cr[4] & CR4_TSD))
    {
        var n = v86.microtick() - cpu.tsc_offset;
        dbg_assert(isFinite(n), "non-finite tsc: " + n);

        cpu.reg32s[reg_eax] = n * TSC_RATE;
        cpu.reg32s[reg_edx] = n * (TSC_RATE / 0x100000000);

        //dbg_log("rdtsc  edx:eax=" + h(cpu.reg32[reg_edx], 8) + ":" + h(cpu.reg32[reg_eax], 8), LOG_CPU);
    }
    else
    {
        cpu.trigger_gp(0);
    }
};

t[0x32] = cpu => {
    // rdmsr - read maschine specific register
    if(cpu.cpl)
    {
        cpu.trigger_gp(0);
    }

    var index = cpu.reg32s[reg_ecx];

    dbg_log("rdmsr ecx=" + h(index >>> 0, 8), LOG_CPU);

    var low = 0;
    var high = 0;

    switch(index)
    {
        case IA32_SYSENTER_CS:
            low = cpu.sysenter_cs;
            break;

        case IA32_SYSENTER_EIP:
            low = cpu.sysenter_eip;
            break;

        case IA32_SYSENTER_ESP:
            low = cpu.sysenter_esp;
            break;

        case IA32_TIME_STAMP_COUNTER:
            var n = v86.microtick() - cpu.tsc_offset;
            cpu.reg32s[reg_eax] = n * TSC_RATE;
            cpu.reg32s[reg_edx] = n * (TSC_RATE / 0x100000000);
            break;

        case IA32_PLATFORM_ID:
            break;

        case IA32_APIC_BASE_MSR:
            low = APIC_ADDRESS;
            break;

        case IA32_BIOS_SIGN_ID:
            break;

        case IA32_MISC_ENABLE: // Enable Misc. Processor Features
            break;

        case 0x570:
            // linux4
            break;

        default:
            dbg_assert(false, "Unknown msr: " + h(index >>> 0, 8));
    }

    cpu.reg32s[reg_eax] = low;
    cpu.reg32s[reg_edx] = high;
};

t[0x33] = cpu => {
    // rdpmc
    cpu.todo();
};

t[0x34] = cpu => {
    // sysenter
    var seg = cpu.sysenter_cs & 0xFFFC;

    if(!cpu.protected_mode || seg === 0)
    {
        cpu.trigger_gp(0);
    }

    //dbg_log("sysenter  cs:eip=" + h(seg    , 4) + ":" + h(cpu.sysenter_eip >>> 0, 8) +
    //                 " ss:esp=" + h(seg + 8, 4) + ":" + h(cpu.sysenter_esp >>> 0, 8), LOG_CPU);

    cpu.flags &= ~flag_vm & ~flag_interrupt;

    cpu.instruction_pointer = cpu.sysenter_eip;
    cpu.reg32s[reg_esp] = cpu.sysenter_esp;

    cpu.sreg[reg_cs] = seg;
    cpu.segment_is_null[reg_cs] = 0;
    cpu.segment_limits[reg_cs] = -1;
    cpu.segment_offsets[reg_cs] = 0;

    if(!cpu.is_32)
        cpu.update_cs_size(true);

    cpu.cpl = 0;
    cpu.cpl_changed();

    cpu.sreg[reg_ss] = seg + 8;
    cpu.segment_is_null[reg_ss] = 0;
    cpu.segment_limits[reg_ss] = -1;
    cpu.segment_offsets[reg_ss] = 0;

    cpu.stack_size_32 = true;
    cpu.stack_reg = cpu.reg32s;
    cpu.reg_vsp = reg_esp;
    cpu.reg_vbp = reg_ebp;
};

t[0x35] = cpu => {
    // sysexit
    var seg = cpu.sysenter_cs & 0xFFFC;

    if(!cpu.protected_mode || cpu.cpl || seg === 0)
    {
        cpu.trigger_gp(0);
    }

    //dbg_log("sysexit  cs:eip=" + h(seg + 16, 4) + ":" + h(cpu.reg32s[reg_edx] >>> 0, 8) +
    //                 " ss:esp=" + h(seg + 24, 4) + ":" + h(cpu.reg32s[reg_ecx] >>> 0, 8), LOG_CPU);

    cpu.instruction_pointer = cpu.reg32s[reg_edx];
    cpu.reg32s[reg_esp] = cpu.reg32s[reg_ecx];

    cpu.sreg[reg_cs] = seg + 16 | 3;

    cpu.segment_is_null[reg_cs] = 0;
    cpu.segment_limits[reg_cs] = -1;
    cpu.segment_offsets[reg_cs] = 0;

    if(!cpu.is_32)
        cpu.update_cs_size(true);

    cpu.cpl = 3;
    cpu.cpl_changed();

    cpu.sreg[reg_ss] = seg + 24 | 3;
    cpu.segment_is_null[reg_ss] = 0;
    cpu.segment_limits[reg_ss] = -1;
    cpu.segment_offsets[reg_ss] = 0;

    cpu.stack_size_32 = true;
    cpu.stack_reg = cpu.reg32s;
    cpu.reg_vsp = reg_esp;
    cpu.reg_vbp = reg_ebp;
};

t[0x36] = cpu => { cpu.undefined_instruction(); };

t[0x37] = cpu => {
    // getsec
    cpu.todo();
};

t[0x38] = cpu => { cpu.unimplemented_sse(); };
t[0x39] = cpu => { cpu.unimplemented_sse(); };
t[0x3A] = cpu => { cpu.unimplemented_sse(); };
t[0x3B] = cpu => { cpu.unimplemented_sse(); };
t[0x3C] = cpu => { cpu.unimplemented_sse(); };
t[0x3D] = cpu => { cpu.unimplemented_sse(); };
t[0x3E] = cpu => { cpu.unimplemented_sse(); };
t[0x3F] = cpu => { cpu.unimplemented_sse(); };


// cmov
t16[0x40] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.cmovcc16( cpu.test_o()); };
t32[0x40] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.cmovcc32( cpu.test_o()); };
t16[0x41] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.cmovcc16(!cpu.test_o()); };
t32[0x41] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.cmovcc32(!cpu.test_o()); };
t16[0x42] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.cmovcc16( cpu.test_b()); };
t32[0x42] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.cmovcc32( cpu.test_b()); };
t16[0x43] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.cmovcc16(!cpu.test_b()); };
t32[0x43] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.cmovcc32(!cpu.test_b()); };
t16[0x44] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.cmovcc16( cpu.test_z()); };
t32[0x44] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.cmovcc32( cpu.test_z()); };
t16[0x45] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.cmovcc16(!cpu.test_z()); };
t32[0x45] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.cmovcc32(!cpu.test_z()); };
t16[0x46] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.cmovcc16( cpu.test_be()); };
t32[0x46] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.cmovcc32( cpu.test_be()); };
t16[0x47] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.cmovcc16(!cpu.test_be()); };
t32[0x47] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.cmovcc32(!cpu.test_be()); };
t16[0x48] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.cmovcc16( cpu.test_s()); };
t32[0x48] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.cmovcc32( cpu.test_s()); };
t16[0x49] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.cmovcc16(!cpu.test_s()); };
t32[0x49] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.cmovcc32(!cpu.test_s()); };
t16[0x4A] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.cmovcc16( cpu.test_p()); };
t32[0x4A] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.cmovcc32( cpu.test_p()); };
t16[0x4B] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.cmovcc16(!cpu.test_p()); };
t32[0x4B] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.cmovcc32(!cpu.test_p()); };
t16[0x4C] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.cmovcc16( cpu.test_l()); };
t32[0x4C] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.cmovcc32( cpu.test_l()); };
t16[0x4D] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.cmovcc16(!cpu.test_l()); };
t32[0x4D] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.cmovcc32(!cpu.test_l()); };
t16[0x4E] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.cmovcc16( cpu.test_le()); };
t32[0x4E] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.cmovcc32( cpu.test_le()); };
t16[0x4F] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.cmovcc16(!cpu.test_le()); };
t32[0x4F] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.cmovcc32(!cpu.test_le()); };


t[0x50] = cpu => { cpu.unimplemented_sse(); };
t[0x51] = cpu => { cpu.unimplemented_sse(); };
t[0x52] = cpu => { cpu.unimplemented_sse(); };
t[0x53] = cpu => { cpu.unimplemented_sse(); };
t[0x54] = cpu => { cpu.unimplemented_sse(); };
t[0x55] = cpu => { cpu.unimplemented_sse(); };
t[0x56] = cpu => { cpu.unimplemented_sse(); };
t[0x57] = cpu => { cpu.unimplemented_sse(); };

t[0x58] = cpu => { cpu.unimplemented_sse(); };
t[0x59] = cpu => { cpu.unimplemented_sse(); };
t[0x5A] = cpu => { cpu.unimplemented_sse(); };
t[0x5B] = cpu => { cpu.unimplemented_sse(); };
t[0x5C] = cpu => { cpu.unimplemented_sse(); };
t[0x5D] = cpu => { cpu.unimplemented_sse(); };
t[0x5E] = cpu => { cpu.unimplemented_sse(); };
t[0x5F] = cpu => { cpu.unimplemented_sse(); };

t[0x60] = cpu => { cpu.unimplemented_sse(); };
t[0x61] = cpu => { cpu.unimplemented_sse(); };
t[0x62] = cpu => { cpu.unimplemented_sse(); };
t[0x63] = cpu => { cpu.unimplemented_sse(); };
t[0x64] = cpu => { cpu.unimplemented_sse(); };
t[0x65] = cpu => { cpu.unimplemented_sse(); };
t[0x66] = cpu => { cpu.unimplemented_sse(); };
t[0x67] = cpu => { cpu.unimplemented_sse(); };

t[0x68] = cpu => { cpu.unimplemented_sse(); };
t[0x69] = cpu => { cpu.unimplemented_sse(); };
t[0x6A] = cpu => { cpu.unimplemented_sse(); };
t[0x6B] = cpu => { cpu.unimplemented_sse(); };
t[0x6C] = cpu => { cpu.unimplemented_sse(); };
t[0x6D] = cpu => { cpu.unimplemented_sse(); };
t[0x6E] = cpu => { cpu.unimplemented_sse(); };
t[0x6F] = cpu => { cpu.unimplemented_sse(); };

t[0x70] = cpu => { cpu.unimplemented_sse(); };
t[0x71] = cpu => { cpu.unimplemented_sse(); };
t[0x72] = cpu => { cpu.unimplemented_sse(); };
t[0x73] = cpu => { cpu.unimplemented_sse(); };
t[0x74] = cpu => { cpu.unimplemented_sse(); };
t[0x75] = cpu => { cpu.unimplemented_sse(); };
t[0x76] = cpu => { cpu.unimplemented_sse(); };
t[0x77] = cpu => { cpu.unimplemented_sse(); };

t[0x78] = cpu => { cpu.unimplemented_sse(); };
t[0x79] = cpu => { cpu.unimplemented_sse(); };
t[0x7A] = cpu => { cpu.unimplemented_sse(); };
t[0x7B] = cpu => { cpu.unimplemented_sse(); };
t[0x7C] = cpu => { cpu.unimplemented_sse(); };
t[0x7D] = cpu => { cpu.unimplemented_sse(); };
t[0x7E] = cpu => { cpu.unimplemented_sse(); };
t[0x7F] = cpu => { cpu.unimplemented_sse(); };

// jmpcc
t16[0x80] = cpu => { cpu.jmpcc16( cpu.test_o()); };
t32[0x80] = cpu => { cpu.jmpcc32( cpu.test_o()); };
t16[0x81] = cpu => { cpu.jmpcc16(!cpu.test_o()); };
t32[0x81] = cpu => { cpu.jmpcc32(!cpu.test_o()); };
t16[0x82] = cpu => { cpu.jmpcc16( cpu.test_b()); };
t32[0x82] = cpu => { cpu.jmpcc32( cpu.test_b()); };
t16[0x83] = cpu => { cpu.jmpcc16(!cpu.test_b()); };
t32[0x83] = cpu => { cpu.jmpcc32(!cpu.test_b()); };
t16[0x84] = cpu => { cpu.jmpcc16( cpu.test_z()); };
t32[0x84] = cpu => { cpu.jmpcc32( cpu.test_z()); };
t16[0x85] = cpu => { cpu.jmpcc16(!cpu.test_z()); };
t32[0x85] = cpu => { cpu.jmpcc32(!cpu.test_z()); };
t16[0x86] = cpu => { cpu.jmpcc16( cpu.test_be()); };
t32[0x86] = cpu => { cpu.jmpcc32( cpu.test_be()); };
t16[0x87] = cpu => { cpu.jmpcc16(!cpu.test_be()); };
t32[0x87] = cpu => { cpu.jmpcc32(!cpu.test_be()); };
t16[0x88] = cpu => { cpu.jmpcc16( cpu.test_s()); };
t32[0x88] = cpu => { cpu.jmpcc32( cpu.test_s()); };
t16[0x89] = cpu => { cpu.jmpcc16(!cpu.test_s()); };
t32[0x89] = cpu => { cpu.jmpcc32(!cpu.test_s()); };
t16[0x8A] = cpu => { cpu.jmpcc16( cpu.test_p()); };
t32[0x8A] = cpu => { cpu.jmpcc32( cpu.test_p()); };
t16[0x8B] = cpu => { cpu.jmpcc16(!cpu.test_p()); };
t32[0x8B] = cpu => { cpu.jmpcc32(!cpu.test_p()); };
t16[0x8C] = cpu => { cpu.jmpcc16( cpu.test_l()); };
t32[0x8C] = cpu => { cpu.jmpcc32( cpu.test_l()); };
t16[0x8D] = cpu => { cpu.jmpcc16(!cpu.test_l()); };
t32[0x8D] = cpu => { cpu.jmpcc32(!cpu.test_l()); };
t16[0x8E] = cpu => { cpu.jmpcc16( cpu.test_le()); };
t32[0x8E] = cpu => { cpu.jmpcc32( cpu.test_le()); };
t16[0x8F] = cpu => { cpu.jmpcc16(!cpu.test_le()); };
t32[0x8F] = cpu => { cpu.jmpcc32(!cpu.test_le()); };

// setcc
t[0x90] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.setcc( cpu.test_o()); };
t[0x91] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.setcc(!cpu.test_o()); };
t[0x92] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.setcc( cpu.test_b()); };
t[0x93] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.setcc(!cpu.test_b()); };
t[0x94] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.setcc( cpu.test_z()); };
t[0x95] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.setcc(!cpu.test_z()); };
t[0x96] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.setcc( cpu.test_be()); };
t[0x97] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.setcc(!cpu.test_be()); };
t[0x98] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.setcc( cpu.test_s()); };
t[0x99] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.setcc(!cpu.test_s()); };
t[0x9A] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.setcc( cpu.test_p()); };
t[0x9B] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.setcc(!cpu.test_p()); };
t[0x9C] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.setcc( cpu.test_l()); };
t[0x9D] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.setcc(!cpu.test_l()); };
t[0x9E] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.setcc( cpu.test_le()); };
t[0x9F] = cpu => { cpu.modrm_byte = cpu.read_imm8(); cpu.setcc(!cpu.test_le()); };

t16[0xA0] = cpu => { cpu.push16(cpu.sreg[reg_fs]); };
t32[0xA0] = cpu => { cpu.push32(cpu.sreg[reg_fs]); };
t16[0xA1] = cpu => {
    cpu.switch_seg(reg_fs, cpu.safe_read16(cpu.get_stack_pointer(0)));
    cpu.stack_reg[cpu.reg_vsp] += 2;
};
t32[0xA1] = cpu => {
    cpu.switch_seg(reg_fs, cpu.safe_read16(cpu.get_stack_pointer(0)));
    cpu.stack_reg[cpu.reg_vsp] += 4;
};

t[0xA2] = cpu => { cpu.cpuid(); };

t16[0xA3] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    if(cpu.modrm_byte < 0xC0)
    {
        cpu.bt_mem(cpu.modrm_resolve(cpu.modrm_byte), cpu.read_g16s());
    }
    else
    {
        cpu.bt_reg(cpu.read_reg_e16(), cpu.read_g16() & 15);
    }
};
t32[0xA3] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    if(cpu.modrm_byte < 0xC0)
    {
        cpu.bt_mem(cpu.modrm_resolve(cpu.modrm_byte), cpu.read_g32s());
    }
    else
    {
        cpu.bt_reg(cpu.read_reg_e32s(), cpu.read_g32s() & 31);
    }
};

t16[0xA4] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    var data = cpu.read_write_e16(); cpu.write_e16_(cpu.shld16(data, cpu.read_g16(), cpu.read_imm8() & 31));
};
t32[0xA4] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    var data = cpu.read_write_e32(); cpu.write_e32_(cpu.shld32(data, cpu.read_g32s(), cpu.read_imm8() & 31));
};
t16[0xA5] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    var data = cpu.read_write_e16(); cpu.write_e16_(cpu.shld16(data, cpu.read_g16(), cpu.reg8[reg_cl] & 31));
};
t32[0xA5] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    var data = cpu.read_write_e32(); cpu.write_e32_(cpu.shld32(data, cpu.read_g32s(), cpu.reg8[reg_cl] & 31));
};

t[0xA6] = cpu => { cpu.undefined_instruction(); };
t[0xA7] = cpu => { cpu.undefined_instruction(); };

t16[0xA8] = cpu => { cpu.push16(cpu.sreg[reg_gs]); };
t32[0xA8] = cpu => { cpu.push32(cpu.sreg[reg_gs]); };
t16[0xA9] = cpu => {
    cpu.switch_seg(reg_gs, cpu.safe_read16(cpu.get_stack_pointer(0)));
    cpu.stack_reg[cpu.reg_vsp] += 2;
};
t32[0xA9] = cpu => {
    cpu.switch_seg(reg_gs, cpu.safe_read16(cpu.get_stack_pointer(0)));
    cpu.stack_reg[cpu.reg_vsp] += 4;
};


t[0xAA] = cpu => {
    // rsm
    cpu.todo();
};

t16[0xAB] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    if(cpu.modrm_byte < 0xC0) {
        cpu.bts_mem(cpu.modrm_resolve(cpu.modrm_byte), cpu.read_g16s());
    } else {
        cpu.write_reg_e16(cpu.bts_reg(cpu.read_reg_e16(), cpu.read_g16s() & 15));
    }
};
t32[0xAB] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    if(cpu.modrm_byte < 0xC0) {
        cpu.bts_mem(cpu.modrm_resolve(cpu.modrm_byte), cpu.read_g32s());
    } else {
        cpu.write_reg_e32(cpu.bts_reg(cpu.read_reg_e32s(), cpu.read_g32s() & 31));
    }
};


t16[0xAC] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    var data = cpu.read_write_e16(); cpu.write_e16_(cpu.shrd16(data, cpu.read_g16(), cpu.read_imm8() & 31));
};
t32[0xAC] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    var data = cpu.read_write_e32(); cpu.write_e32_(cpu.shrd32(data, cpu.read_g32s(), cpu.read_imm8() & 31));
};
t16[0xAD] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    var data = cpu.read_write_e16(); cpu.write_e16_(cpu.shrd16(data, cpu.read_g16(), cpu.reg8[reg_cl] & 31));
};
t32[0xAD] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    var data = cpu.read_write_e32(); cpu.write_e32_(cpu.shrd32(data, cpu.read_g32s(), cpu.reg8[reg_cl] & 31));
};

t[0xAE] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    // fxsave, fxrstor, ldmxcsr ...

    switch(cpu.modrm_byte >> 3 & 7)
    {
        case 6:
            // mfence
            dbg_assert(cpu.modrm_byte >= 0xC0, "Unexpected mfence encoding");
            break;
        default:
            dbg_log("missing " + (cpu.modrm_byte >> 3 & 7), LOG_CPU);
            cpu.todo();
    }
};

t16[0xAF] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    var data = cpu.read_e16s();
    cpu.write_g16(cpu.imul_reg16(cpu.read_g16s(), data));
};
t32[0xAF] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    var data = cpu.read_e32s();
    cpu.write_g32(cpu.imul_reg32(cpu.read_g32s(), data));
};


t[0xB0] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    // cmpxchg8
    if(cpu.modrm_byte < 0xC0)
    {
        var virt_addr = cpu.modrm_resolve(cpu.modrm_byte);
        cpu.writable_or_pagefault(virt_addr, 1);

        var data = cpu.safe_read8(virt_addr);
    }
    else
        data = cpu.reg8[cpu.modrm_byte << 2 & 0xC | cpu.modrm_byte >> 2 & 1];


    cpu.cmp8(cpu.reg8[reg_al], data);

    if(cpu.getzf())
    {
        if(cpu.modrm_byte < 0xC0)
            cpu.safe_write8(virt_addr, cpu.read_g8());
        else
            cpu.reg8[cpu.modrm_byte << 2 & 0xC | cpu.modrm_byte >> 2 & 1] = cpu.read_g8();
    }
    else
    {
        cpu.reg8[reg_al] = data;
    }
};
t16[0xB1] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    // cmpxchg16/32
    if(cpu.modrm_byte < 0xC0)
    {
        var virt_addr = cpu.modrm_resolve(cpu.modrm_byte);
        cpu.writable_or_pagefault(virt_addr, 2);

        var data = cpu.safe_read16(virt_addr);
    }
    else
        data = cpu.read_reg_e16();

    cpu.cmp16(cpu.reg16[reg_ax], data);

    if(cpu.getzf())
    {
        if(cpu.modrm_byte < 0xC0)
            cpu.safe_write16(virt_addr, cpu.read_g16());
        else
            cpu.write_reg_e16(cpu.read_g16());
    }
    else
    {
        cpu.reg16[reg_ax] = data;
    }
};
t32[0xB1] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    if(cpu.modrm_byte < 0xC0)
    {
        var virt_addr = cpu.modrm_resolve(cpu.modrm_byte);
        cpu.writable_or_pagefault(virt_addr, 4);

        var data = cpu.safe_read32s(virt_addr);
    }
    else
    {
        data = cpu.read_reg_e32s();
    }

    cpu.cmp32(cpu.reg32s[reg_eax], data);

    if(cpu.getzf())
    {
        if(cpu.modrm_byte < 0xC0)
            cpu.safe_write32(virt_addr, cpu.read_g32s());
        else
            cpu.write_reg_e32(cpu.read_g32s());
    }
    else
    {
        cpu.reg32s[reg_eax] = data;
    }
};

// lss
t16[0xB2] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    cpu.lss16(reg_ss);
};
t32[0xB2] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    cpu.lss32(reg_ss);
};

t16[0xB3] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    if(cpu.modrm_byte < 0xC0) {
        cpu.btr_mem(cpu.modrm_resolve(cpu.modrm_byte), cpu.read_g16s());
    } else {
        cpu.write_reg_e16(cpu.btr_reg(cpu.read_reg_e16(), cpu.read_g16s() & 15));
    }
};
t32[0xB3] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    if(cpu.modrm_byte < 0xC0) {
        cpu.btr_mem(cpu.modrm_resolve(cpu.modrm_byte), cpu.read_g32s());
    } else {
        cpu.write_reg_e32(cpu.btr_reg(cpu.read_reg_e32s(), cpu.read_g32s() & 31));
    }
};

// lfs, lgs
t16[0xB4] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    cpu.lss16(reg_fs);
};
t32[0xB4] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    cpu.lss32(reg_fs);
};
t16[0xB5] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    cpu.lss16(reg_gs);
};
t32[0xB5] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    cpu.lss32(reg_gs);
};

t16[0xB6] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    // movzx
    var data = cpu.read_e8();
    cpu.write_g16(data);
};
t32[0xB6] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    var data = cpu.read_e8();
    cpu.write_g32(data);
};

t[0xB7] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    // movzx
    var data = cpu.read_e16();
    cpu.write_g32(data);
};

t16[0xB8] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    // popcnt
    var data = cpu.read_e16();
    cpu.write_g16(cpu.popcnt(data));
};
t32[0xB8] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    var data = cpu.read_e32s();
    cpu.write_g32(cpu.popcnt(data));
};

t[0xB9] = cpu => {
    // UD
    cpu.todo();
};

t16[0xBA] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    //dbg_log("BA " + mod + " " + imm8);

    switch(cpu.modrm_byte >> 3 & 7)
    {
        case 4:
            if(cpu.modrm_byte < 0xC0)
            {
                cpu.bt_mem(cpu.modrm_resolve(cpu.modrm_byte), cpu.read_imm8() & 15);
            }
            else
            {
                cpu.bt_reg(cpu.read_reg_e16(), cpu.read_imm8() & 15);
            }
            break;
        case 5:
            if(cpu.modrm_byte < 0xC0) {
                cpu.bts_mem(cpu.modrm_resolve(cpu.modrm_byte), cpu.read_imm8() & 15);
            } else {
                cpu.write_reg_e16(cpu.bts_reg(cpu.read_reg_e16(), cpu.read_imm8() & 15));
            }
            break;
        case 6:
            if(cpu.modrm_byte < 0xC0) {
                cpu.btr_mem(cpu.modrm_resolve(cpu.modrm_byte), cpu.read_imm8() & 15);
            } else {
                cpu.write_reg_e16(cpu.btr_reg(cpu.read_reg_e16(), cpu.read_imm8() & 15));
            }
            break;
        case 7:
            if(cpu.modrm_byte < 0xC0) {
                cpu.btc_mem(cpu.modrm_resolve(cpu.modrm_byte), cpu.read_imm8() & 15);
            } else {
                cpu.write_reg_e16(cpu.btc_reg(cpu.read_reg_e16(), cpu.read_imm8() & 15));
            }
            break;
        default:
            dbg_log(cpu.modrm_byte >> 3 & 7);
            cpu.todo();
    }
};
t32[0xBA] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    //dbg_log("BA " + mod + " " + imm8);

    switch(cpu.modrm_byte >> 3 & 7)
    {
        case 4:
            if(cpu.modrm_byte < 0xC0)
            {
                cpu.bt_mem(cpu.modrm_resolve(cpu.modrm_byte), cpu.read_imm8() & 31);
            }
            else
            {
                cpu.bt_reg(cpu.read_reg_e32s(), cpu.read_imm8() & 31);
            }
            break;
        case 5:
            if(cpu.modrm_byte < 0xC0) {
                cpu.bts_mem(cpu.modrm_resolve(cpu.modrm_byte), cpu.read_imm8() & 31);
            } else {
                cpu.write_reg_e32(cpu.bts_reg(cpu.read_reg_e32s(), cpu.read_imm8() & 31));
            }
            break;
        case 6:
            if(cpu.modrm_byte < 0xC0) {
                cpu.btr_mem(cpu.modrm_resolve(cpu.modrm_byte), cpu.read_imm8() & 31);
            } else {
                cpu.write_reg_e32(cpu.btr_reg(cpu.read_reg_e32s(), cpu.read_imm8() & 31));
            }
            break;
        case 7:
            if(cpu.modrm_byte < 0xC0) {
                cpu.btc_mem(cpu.modrm_resolve(cpu.modrm_byte), cpu.read_imm8() & 31);
            } else {
                cpu.write_reg_e32(cpu.btc_reg(cpu.read_reg_e32s(), cpu.read_imm8() & 31));
            }
            break;
        default:
            dbg_log(cpu.modrm_byte >> 3 & 7);
            cpu.todo();
    }
};

t16[0xBB] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    if(cpu.modrm_byte < 0xC0) {
        cpu.btc_mem(cpu.modrm_resolve(cpu.modrm_byte), cpu.read_g16s());
    } else {
        cpu.write_reg_e16(cpu.btc_reg(cpu.read_reg_e16(), cpu.read_g16s() & 15));
    }
};
t32[0xBB] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    if(cpu.modrm_byte < 0xC0) {
        cpu.btc_mem(cpu.modrm_resolve(cpu.modrm_byte), cpu.read_g32s());
    } else {
        cpu.write_reg_e32(cpu.btc_reg(cpu.read_reg_e32s(), cpu.read_g32s() & 31));
    }
};

t16[0xBC] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    var data = cpu.read_e16();
    cpu.write_g16(cpu.bsf16(cpu.read_g16(), data));
};
t32[0xBC] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    var data = cpu.read_e32s();
    cpu.write_g32(cpu.bsf32(cpu.read_g32s(), data));
};

t16[0xBD] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    var data = cpu.read_e16();
    cpu.write_g16(cpu.bsr16(cpu.read_g16(), data));
};
t32[0xBD] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    var data = cpu.read_e32s();
    cpu.write_g32(cpu.bsr32(cpu.read_g32s(), data));
};

t16[0xBE] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    // movsx
    var data = cpu.read_e8s();
    cpu.write_g16(data);
};
t32[0xBE] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    var data = cpu.read_e8s();
    cpu.write_g32(data);
};

t[0xBF] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    // movsx
    var data = cpu.read_e16s();
    cpu.write_g32(data);
};

t[0xC0] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    var data = cpu.read_write_e8(); cpu.write_e8_(cpu.xadd8(data, cpu.modrm_byte >> 1 & 0xC | cpu.modrm_byte >> 5 & 1));
};

t16[0xC1] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    var data = cpu.read_write_e16();
    cpu.write_e16_(cpu.xadd16(data, cpu.modrm_byte >> 2 & 14));
};
t32[0xC1] = cpu => { cpu.modrm_byte = cpu.read_imm8();
    var data = cpu.read_write_e32();
    cpu.write_e32_(cpu.xadd32(data, cpu.modrm_byte >> 3 & 7));
};


t[0xC2] = cpu => { cpu.unimplemented_sse(); };
t[0xC3] = cpu => { cpu.unimplemented_sse(); };
t[0xC4] = cpu => { cpu.unimplemented_sse(); };
t[0xC5] = cpu => { cpu.unimplemented_sse(); };
t[0xC6] = cpu => { cpu.unimplemented_sse(); };

t[0xC7] = cpu => {
    cpu.modrm_byte = cpu.read_imm8();

    // cmpxchg8b
    switch(cpu.modrm_byte >> 3 & 7)
    {
        case 1:
            if(cpu.modrm_byte >= 0xC0)
            {
                cpu.trigger_ud();
            }

            var addr = cpu.modrm_resolve(cpu.modrm_byte);
            cpu.writable_or_pagefault(addr, 8);

            var m64_low = cpu.safe_read32s(addr);
            var m64_high = cpu.safe_read32s(addr + 4 | 0);

            if(cpu.reg32s[reg_eax] === m64_low &&
               cpu.reg32s[reg_edx] === m64_high)
            {
                cpu.flags |= flag_zero;

                cpu.safe_write32(addr, cpu.reg32s[reg_ebx]);
                cpu.safe_write32(addr + 4 | 0, cpu.reg32s[reg_ecx]);
            }
            else
            {
                cpu.flags &= ~flag_zero;

                cpu.reg32s[reg_eax] = m64_low;
                cpu.reg32s[reg_edx] = m64_high;
            }

            cpu.flags_changed &= ~flag_zero;
            break;

        case 6:
            var has_rand = v86.has_rand_int();

            if(has_rand)
            {
                var rand = v86.get_rand_int();
            }
            else
            {
                var rand = 0;
            }
            //dbg_log("rdrand -> " + h(rand >>> 0, 8), LOG_CPU);

            if(cpu.operand_size_32)
            {
                var addr = cpu.modrm_resolve(cpu.modrm_byte);
                cpu.set_e32(addr, rand);
            }
            else
            {
                var addr = cpu.modrm_resolve(cpu.modrm_byte);
                cpu.set_e16(addr, rand);
            }

            cpu.flags &= ~flags_all;
            cpu.flags |= has_rand;
            cpu.flags_changed = 0;
            break;

        default:
            dbg_log(cpu.modrm_byte >> 3 & 7, LOG_CPU);
            cpu.todo();
    }
};

t[0xC8] = cpu => { cpu.bswap(reg_eax); };
t[0xC9] = cpu => { cpu.bswap(reg_ecx); };
t[0xCA] = cpu => { cpu.bswap(reg_edx); };
t[0xCB] = cpu => { cpu.bswap(reg_ebx); };
t[0xCC] = cpu => { cpu.bswap(reg_esp); };
t[0xCD] = cpu => { cpu.bswap(reg_ebp); };
t[0xCE] = cpu => { cpu.bswap(reg_esi); };
t[0xCF] = cpu => { cpu.bswap(reg_edi); };

t[0xD0] = cpu => { cpu.unimplemented_sse(); };
t[0xD1] = cpu => { cpu.unimplemented_sse(); };
t[0xD2] = cpu => { cpu.unimplemented_sse(); };
t[0xD3] = cpu => { cpu.unimplemented_sse(); };
t[0xD4] = cpu => { cpu.unimplemented_sse(); };
t[0xD5] = cpu => { cpu.unimplemented_sse(); };
t[0xD6] = cpu => { cpu.unimplemented_sse(); };
t[0xD7] = cpu => { cpu.unimplemented_sse(); };

t[0xD8] = cpu => { cpu.unimplemented_sse(); };
t[0xD9] = cpu => { cpu.unimplemented_sse(); };
t[0xDA] = cpu => { cpu.unimplemented_sse(); };
t[0xDB] = cpu => { cpu.unimplemented_sse(); };
t[0xDC] = cpu => { cpu.unimplemented_sse(); };
t[0xDD] = cpu => { cpu.unimplemented_sse(); };
t[0xDE] = cpu => { cpu.unimplemented_sse(); };
t[0xDF] = cpu => { cpu.unimplemented_sse(); };

t[0xE0] = cpu => { cpu.unimplemented_sse(); };
t[0xE1] = cpu => { cpu.unimplemented_sse(); };
t[0xE2] = cpu => { cpu.unimplemented_sse(); };
t[0xE3] = cpu => { cpu.unimplemented_sse(); };
t[0xE4] = cpu => { cpu.unimplemented_sse(); };
t[0xE5] = cpu => { cpu.unimplemented_sse(); };
t[0xE6] = cpu => { cpu.unimplemented_sse(); };
t[0xE7] = cpu => { cpu.unimplemented_sse(); };

t[0xE8] = cpu => { cpu.unimplemented_sse(); };
t[0xE9] = cpu => { cpu.unimplemented_sse(); };
t[0xEA] = cpu => { cpu.unimplemented_sse(); };
t[0xEB] = cpu => { cpu.unimplemented_sse(); };
t[0xEC] = cpu => { cpu.unimplemented_sse(); };
t[0xED] = cpu => { cpu.unimplemented_sse(); };
t[0xEE] = cpu => { cpu.unimplemented_sse(); };
t[0xEF] = cpu => { cpu.unimplemented_sse(); };

t[0xF0] = cpu => { cpu.unimplemented_sse(); };
t[0xF1] = cpu => { cpu.unimplemented_sse(); };
t[0xF2] = cpu => { cpu.unimplemented_sse(); };
t[0xF3] = cpu => { cpu.unimplemented_sse(); };
t[0xF4] = cpu => { cpu.unimplemented_sse(); };
t[0xF5] = cpu => { cpu.unimplemented_sse(); };
t[0xF6] = cpu => { cpu.unimplemented_sse(); };
t[0xF7] = cpu => { cpu.unimplemented_sse(); };

t[0xF8] = cpu => { cpu.unimplemented_sse(); };
t[0xF9] = cpu => { cpu.unimplemented_sse(); };
t[0xFA] = cpu => { cpu.unimplemented_sse(); };
t[0xFB] = cpu => { cpu.unimplemented_sse(); };
t[0xFC] = cpu => { cpu.unimplemented_sse(); };
t[0xFD] = cpu => { cpu.unimplemented_sse(); };
t[0xFE] = cpu => { cpu.unimplemented_sse(); };

// NSA backdoor instruction
t[0xFF] = cpu => { cpu.undefined_instruction(); };


var table0F_16 = [];
var table0F_32 = [];
CPU.prototype.table0F_16 = table0F_16;
CPU.prototype.table0F_32 = table0F_32;

for(i = 0; i < 256; i++)
{
    if(t[i])
    {
        //dbg_assert(!t16[i]);
        //dbg_assert(!t32[i]);
        table0F_16[i] = table0F_32[i] = t[i];
    }
    else if(t16[i])
    {
        //dbg_assert(!t[i]);
        //dbg_assert(t32[i]);
        table0F_16[i] = t16[i];
        table0F_32[i] = t32[i];
    }
}
