import React, { useState, useEffect } from "react";

import Calendar from '@/components/Calendar/Calendar';

export default function Client() {
  return (
    <section className='page-container-db'>
      <Calendar />
    </section>
  );
}
