
import { Button } from '@mui/material';
import React from 'react';

const Project03 = () => {
    const isActive = false;
    return (
        <div>
            <Button variant='contained' 
            sx={[{
                border:'1px solid red',
                bgcolor:'steelblue',
                p: 2, // unit is 8 ; means 1 = 8px, 2 = 8x2 = 16px
                // width: {
                //     xs: 100, // theme.breakpoints.up('xs')
                //     sm: 200, // theme.breakpoints.up('sm')
                //     md: 300, // theme.breakpoints.up('md')
                //     lg: 400, // theme.breakpoints.up('lg')
                //     xl: 500, // theme.breakpoints.up('xl')
                //   },
                  '&.MuiButton-root':{ // change Mui default class value
                      padding:'3rem'
                  },
                  width:[ // Shorthand for using width without using (xs,sm,...)
                      100,
                      200,
                      300,
                      400,
                      500
                  ]
            },
            isActive && {
                background:'yellow'
            }
        ]}
            >Submit</Button>
        </div>
    );
};

export default Project03;