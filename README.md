
# fvfill

## Polyfill for field-of-view units in CSS

This library serves as a polyfill for support field-of-view units ('dg' - degrees, and 'mr' - milliradians) in your CSS.

Using field-of-view units (angular measurements from a viewer's perspective) allows designs/layout to be specified in a 'scenario agnostic' way.

## Usage

Include the two JavaScript files installed by bower on your web page

### Code
    <script src="bower_components/prefixfree/prefixfree.min.js"></script>
    <script src="bower_components/fvfill/fvfill.js"></script>
    
You can then specify "dg" or "mr" anywhere you can specify normal CSS units like em, px, vw, etc.

The URL for the page being viewed must provide the viewing distance of the observer and the diagonal measurement of the device/monitor the page is being displayed on.  The units used for these two measurements must be consistent (inches for both, cm for both, etc.) but thanks to trigonometry, it's the ratio that is important, not the actual units used.

### Example (Nexus 5x viewed at arm's length)
    http://www.example.com/page.html#distance=14;diag=5.2
    
### Example (iPad, installed on a wall 4 feet away)
    http://www.example.com/page.html#distance=48;diag=9.6

### Example (47" widescreen TV viewed at 8 feet)
    http://www.example.com/page.html#distance=96;diag=47

## Use case / Example

Per the usage examples above, let's say you have a web page you want viewed from a smartphone (arm's length), a tablet (installed on a wall) and a widescreen TV (from 8 feet).  Using field-of-view measurements these different scenarios could potentially take up a similar field-of-view from the viewer's perspective, and therefore have the same available visual real estate.  The same layout could then be used for different scenarios in order to ensure the page is readable/absorbable by the viewer.

There are two common areas where field-of-view measurements would be used.  In media-query statements which apply styles/layouts only when the field-of-view as seen by the viewer applies.

In code example below, we only want the first style applied when the field-of-view for the scenario is more than 35 degrees, while the second style is applied for field-of-view scenarios between 25 and 35 degrees
### Media-query example
    @media only screen and (max-width: 35dg) {
    	h1.title {
    		color: green;
    	}
   	}

    @media only screen and (max-width: 25dg) {
    	h1.title {
    		color: red;
    	}
   	}


Another common usage is ensuring font sizes are 'readable' across all scenarios.  Using field-of-view measurements ensures that the text will be displayed in a way that will take up exactly that amount of field-of-view for every scenario the page is viewed.

The following example sets the H1 font-size to 8mr (there are 17.45 milliradians per degree).

### Font size example
    h1.title {
        font-size: 8mr;
    }



