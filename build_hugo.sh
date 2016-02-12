#!/bin/bash
myth static/css/home_src.css static/css/home.css
myth static/css/custom_src.css static/css/custom.css
hugo server --buildDrafts
