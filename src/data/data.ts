import commentator1 from '../assets/img/Ellipse 1.png';

interface Education {
    title: string;
    description: string;
}

interface Feedbacks {
    text: string,
    img: string,
}

export const aboutMeInfo = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque'

export const education: Education[] = [
    {
        title: 'Maecenas dignissim luctus mauris id cursus. Suspendisse potenti',
        description: 'Aenean in pretium sapien. Cras ut nisi a ex lacinia vestibulum. Cras non varius dolor. Nam lacinia malesuada accumsan. Nam in efficitur lectus. Ut sit amet gravida libero. Curabitur non sodales leo. Aenean non orci bibendum, tristique dui a, rutrum elit. Praesent nec ligula tempor massa hendrerit molestie at sed nibh.',
    },
    {
        title: 'Nunc a odio rhoncus, feugiat ipsum sit amet, tincidunt mi',
        description: 'Donec egestas ligula vel odio rutrum, sed cursus diam cursus. In hac habitasse platea dictumst. In eget lacus vel mi aliquam porta ut vel ante. Praesent dui erat, malesuada vitae accumsan a, ultrices ac orci. Maecenas dignissim luctus mauris id cursus. Suspendisse potenti. Sed laoreet volutpat enim nec ultrices. ',
    },
    {
        title: 'Aenean in pretium sapien. Cras ut nisi a ex lacinia vestibulum',
        description: 'Proin aliquet nisi sit amet tempus pharetra. Donec ullamcorper aliquet libero, a efficitur elit iaculis porta. Vivamus tempor vehicula libero, ut ultricies tortor tincidunt vel. Etiam tincidunt tristique ante, a fringilla elit. Donec aliquet ante in urna placerat, sit amet vehicula quam lobortis. Curabitur vehicula cursus ultricies. Donec suscipit lorem rhoncus, eleifend tellus sed, tempus erat. Sed maximus, elit nec rhoncus egestas, urna eros scelerisque mauris, in tristique orci enim in sapien. Cras suscipit quam quis nisl posuere, maximus pulvinar dolor ultricies.',
    },
    {
        title: ' Proin at magna efficitur libero efficitur auctor eu pellentesque nunc',
        description: 'Suspendisse lacinia est a ligula finibus, a dictum risus mollis. Mauris consectetur est vitae est malesuada, et tristique ex lobortis. Donec maximus orci at justo auctor, sit amet elementum tortor interdum. Nam non luctus eros. Vivamus auctor libero quis ligula elementum, vel gravida metus ultricies. Aliquam viverra vel enim vitae ultrices. Morbi sollicitudin risus auctor turpis tincidunt, vel volutpat erat feugiat. ',
    },
    {
        title: 'Praesent dui erat, malesuada vitae accumsan a, ultrices ac orci',
        description: 'Phasellus posuere congue auctor. Sed odio ligula, consectetur sed enim eu, aliquam tempus orci. Aenean in pretium sapien. Cras ut nisi a ex lacinia vestibulum. Cras non varius dolor. Nam lacinia malesuada accumsan',
    },
    {
        title: 'Suspendisse lacinia est a ligula finibus, a dictum risus mollis',
        description: 'Donec suscipit lorem rhoncus, eleifend tellus sed, tempus erat. Sed maximus, elit nec rhoncus egestas, urna eros scelerisque mauris, in tristique orci enim in sapien. Cras suscipit quam quis nisl posuere, maximus pulvinar dolor ultricies. Quisque ac enim lacinia, vestibulum diam vel, scelerisque felis. In malesuada varius sodales.',
    },
]

export const feedbacks: Feedbacks[] = [
    {
        text: 'Nam lacus nulla, egestas sed rhoncus vel, iaculis eget ante. Sed venenatis velit lacinia, tincidunt tortor nec, vulputate risus. Sed lobortis nibh sapien, ut pretium justo egestas eu. Nullam at tellus eget dolor efficitur egestas et non nisi. Fusce varius mi non sapien ullamcorper tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean sed mi mi. <br />Aenean interdum augue non tempus euismod. Morbi id eros non lectus commodo rutrum. Duis pellentesque eros in tortor tincidunt auctor. Mauris ut ipsum ligula. Duis nec condimentum turpis. Proin aliquet nisi sit amet tempus pharetra.',
        img: commentator1,
    },
    {
        text: 'Aliquam pulvinar dignissim risus, quis suscipit velit malesuada feugiat. Donec lobortis urna eget posuere ornare. Suspendisse lacinia est a ligula finibus, a dictum risus mollis. Mauris consectetur est vitae est malesuada, et tristique ex lobortis. Donec maximus orci at justo auctor, sit amet elementum tortor interdum. Nam non luctus eros. Vivamus auctor libero quis ligula elementum, vel gravida metus ultricies. Aliquam viverra vel enim vitae ultrices. Morbi sollicitudin risus auctor turpis tincidunt, vel volutpat erat feugiat. In vulputate a mi sed ullamcorper.',
        img: commentator1,
    },
    {
        text: 'Maecenas dignissim luctus mauris id cursus. Suspendisse potenti. Sed laoreet volutpat enim nec ultrices. Phasellus pulvinar tempus nulla, vel venenatis risus varius vitae. Nam finibus nisi a felis bibendum pretium. Nulla facilisi. Nullam nec fringilla leo, rutrum dictum massa. Praesent purus urna, tempor non mattis mattis, pulvinar eget nisi.<br />Phasellus posuere congue auctor. Sed odio ligula, consectetur sed enim eu, aliquam tempus orci. Aenean in pretium sapien. Cras ut nisi a ex lacinia vestibulum. Cras non varius dolor.',
        img: commentator1,
    }
]