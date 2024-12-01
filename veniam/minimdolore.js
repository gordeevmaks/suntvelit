const layoutHeaderComponent = {
    default: DefaultHeader,
    fancy: FancyHeader,
    minimalist: MinimalistHeader
};

const headerType = 'fancy';

const headerComponent = layoutHeaderComponent[headerType]; 
// This will assign FancyHeader to headerComponent
