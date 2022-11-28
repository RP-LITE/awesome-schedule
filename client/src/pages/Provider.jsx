import React, { useState, useEffect } from "react";

import Calendar from '@/components/Calendar/Calendar';
import CreateService from '@/components/modals/CreateService';

export default function Provider() {
  return (
    <section className='page-container-db'>
      <CreateService />
      <Calendar isProvider={true} />
    </section>
  );
}
