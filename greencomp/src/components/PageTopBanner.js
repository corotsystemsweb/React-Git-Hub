import React from 'react'

const PageTopBanner = (props) => {
  return (
    <div class="brand_color  banner-bg">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="titlepage">
                    <h2>{props.pageTitle}</h2>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default PageTopBanner;
