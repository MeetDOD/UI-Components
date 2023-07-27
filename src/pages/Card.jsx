import React from 'react'
import Filter1Icon from '@mui/icons-material/Filter1';
import Filter2Icon from '@mui/icons-material/Filter2';
import Filter3Icon from '@mui/icons-material/Filter3';
import Filter4Icon from '@mui/icons-material/Filter4';
import './red.css'

const Card = () => {
  return (
    <div>
      <div>
      <div class="page-section ">
    <div class="container">
      <div class="text-center wow fadeInUp">
        <h2 class="title-section text-danger">BizThon 3.0 Schedule</h2>
        <div class="divider mx-auto ree"></div>
      </div>

        <div class="row">
          <div class="col-sm-6 col-lg-4 col-xl-3 py-3 wow zoomIn">
            <div class="features">
              <div class="header mb-3" >
                <Filter1Icon fontSize='large' style={{ color: 'red' }}/>
              </div>
              <h2 className='text-danger'>Stage 1</h2>
              <h4>Idea submission</h4>
            </div>
          </div>
          <div class="col-sm-6 col-lg-4 col-xl-3 py-3 wow zoomIn">
            <div class="features">
              <div class="header mb-3">
              <Filter2Icon fontSize='large' style={{ color: 'red' }} />
              </div>
              <h2 className='text-danger'>Stage 2</h2>
              <h4>MVP submission</h4>
            </div>
          </div>
          <div class="col-sm-6 col-lg-4 col-xl-3 py-3 wow zoomIn">
            <div class="features">
              <div class="header mb-3">
              <Filter3Icon fontSize='large' style={{ color: 'red' }} />
              </div>
              <h2 className='text-danger'>Stage 3</h2>
              <h4>Campus submission</h4>
            </div>
          </div>
          <div class="col-sm-6 col-lg-4 col-xl-3 py-3 wow zoomIn">
            <div class="features">
              <div class="header mb-3">
              <Filter4Icon fontSize='large' style={{ color: 'red' }}/>
              </div>
              <h2 className='text-danger'>Stage 4</h2>
              <h4>Dubai submission</h4>
            </div>
          </div>
        </div>

    </div>
  </div>
    </div>
    </div>
  )
}

export default Card
